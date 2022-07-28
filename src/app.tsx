// 运行时配置
import { history, Link, RequestConfig, RunTimeLayoutConfig } from "@umijs/max";
import { message, notification } from "antd";
import RightContent from '@/components/RightContent'
import service from "./services/user";
import defaultSettings from "../config/defaultSettings";

const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/login';
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化

/*---------------------------------------- getInitialState /*----------------------------------------*/
export async function getInitialState() {

  const fetchUserInfo = async () => {
    try {
      const msg = await service.validateToken();
      return msg.data;
    } catch (error) {
      history.push(loginPath);
    }
    return undefined;
  };
  // 如果不是登录页面，执行
  if (history.location.pathname !== loginPath) {
    const currentUser = await fetchUserInfo();
    return {
      currentUser,
      settings: defaultSettings,
    };
  }
  return {
    settings: defaultSettings,
  };
}

/*---------------------------------------- layout /*----------------------------------------*/
export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {

  return {
    layout: "top",
    // splitMenus: true,
    rightContentRender: () => <RightContent />,
    // disableContentMargin: false,
    links: [],
    onPageChange: () => {
      const { location } = history;
      // 如果没有登录，重定向到 login
      if (location.pathname !== loginPath) {
        if (!initialState?.currentUser) {
          history.push(loginPath);
        }
      }
    },
    loading: !initialState?.currentUser,
    // onMenuHeaderClick:()=>{console.log(2);},
    // actionRef:()=>{console.log("actionRef");}
    ...initialState?.settings,

  };
};


/*---------------------------------------- request /*----------------------------------------*/
// 错误处理方案： 错误类型
enum ErrorShowType {
  SILENT = 0,
  WARN_MESSAGE = 1,
  ERROR_MESSAGE = 2,
  NOTIFICATION = 3,
  REDIRECT = 9,
}
// 与后端约定的响应数据格式
interface ResponseStructure {
  success: boolean;
  data: any;
  errorCode?: number;
  errorMessage?: string;
  showType?: ErrorShowType;
}

// 运行时配置
export const request: RequestConfig = {

  // 统一的请求设定
  timeout: 10000,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },

  // 错误处理： umi@3 的错误处理方案。
  errorConfig: {
    // 错误抛出
    errorThrower: (res: any) => {
      const { success, data, errorCode, errorMessage, showType } = res;
      if (!success) {
        const error: any = new Error(errorMessage);
        error.name = "BizError";
        error.info = { errorCode, errorMessage, showType, data };
        throw error; // 抛出自制的错误
      }
    },
    // 错误接收及处理
    errorHandler: (error: any, opts: any) => {
      if (opts?.skipErrorHandler) throw error;
      // 我们的 errorThrower 抛出的错误。
      if (error.name === "BizError") {
        const errorInfo: ResponseStructure | undefined = error.info;
        if (errorInfo) {
          const { errorMessage, errorCode } = errorInfo;
          switch (errorInfo.showType) {
            case ErrorShowType.SILENT:
              // do nothing
              break;
            case ErrorShowType.WARN_MESSAGE:
              message.warn(errorMessage);
              break;
            case ErrorShowType.ERROR_MESSAGE:
              message.error(errorMessage);
              break;
            case ErrorShowType.NOTIFICATION:
              notification.open({
                description: errorMessage,
                message: errorCode,
              });
              break;
            case ErrorShowType.REDIRECT:
              // TODO: redirect
              break;
            default:
              message.error(errorMessage);
          }
        }
      } else if (error.response) {
        // Axios 的错误
        // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
        const { response } = error
        const { data } = response
        if (data && data.message) {
          message.error(data.message);
        } else {
          message.error("Response status:" + error.response.status);
        }
      } else if (error.request) {
        // 请求已经成功发起，但没有收到响应
        // \`error.request\` 在浏览器中是 XMLHttpRequest 的实例，
        // 而在node.js中是 http.ClientRequest 的实例
        message.error("None response! Please retry.");
      } else {
        // 发送请求时出了点问题
        message.error("Request error, please retry.");
      }
    },
  },

  // 请求拦截器
  requestInterceptors: [
    (config) => {
      // 拦截请求配置，进行个性化处理。
      // const url = config.url.concat("?token = 123");
      // return { ...config, url };
      let token = window.localStorage.getItem("token") ? `Bearer ${localStorage.getItem("token")}` : undefined

      return { ...config, headers: { ...config.headers, Authorization: token } }
    },
  ],

  // 响应拦截器
  responseInterceptors: [
    (response: any) => {
      // 拦截响应数据，进行个性化处理
      const { data }: any = response;
      if (!data.success) {
        message.error("请求失败！");
      }
      return response;
    },
  ],
};

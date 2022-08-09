/*
 * @Author: L5250
 * @Description: desc
 * @Date: 2022-07-22 09:04:58
 * @LastEditors: L5250
 * @LastEditTime: 2022-08-09 16:58:56
 */
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Avatar, message, Upload } from 'antd';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import React, { useState } from 'react';
import ImgCrop from 'antd-img-crop';
const { api } = process.env

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 5;
  if (!isLt2M) {
    message.error('Image must smaller than 5MB!');
  }
  console.log(file)
  return isJpgOrPng && isLt2M;
};

const UploadAvatar: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { initialState, refresh } = useModel("@@initialState")
  const { uploadAvatarReq } = useModel("Account.Setting.model")

  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    console.log(info)
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      setTimeout(() => {
        refresh()
      }, 3000);
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, url => {
        setLoading(false);
      });
    }

    return
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  // 上传前裁剪
  const onPreview = async (file: UploadFile) => {
    console.log(file)
    let src = file.url as string;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  return (
    <>
      <ImgCrop
        // grid
        shape="round"
      // rotate
      >
        <Upload
          name="file"
          listType="picture-card"
          className="avatar-uploader text-center"
          showUploadList={false}
          action={`${api}/qnuploads/avatar`}
          beforeUpload={beforeUpload}
          onChange={handleChange}
          onPreview={onPreview}
          data={{ id: initialState?.currentUser.id }}

          // customRequest={async (options) => {
          //   console.log(options);
          //   let params = new FormData();
          //   params.append("file", options.file);
          //   // this.props.ajax.post(`/admin/sys-file/upload`, params, { headers: { 'Content-Type': 'multipart/form-data' } }).then((res) => {

          //   options.onSuccess(true, options.file);
          //   // })
          //   return
          //   // await uploadAvatarReq.run({ ...data, file })
          // }}
        >
          {initialState?.currentUser.avatarUrl ? <img src={initialState?.currentUser.avatarUrl} alt="avatar" style={{ width: "100%" }} /> : uploadButton}
        </Upload>
      </ImgCrop>
      {/* <div>
        <img src={initialState?.currentUser.avatarUrl} alt="avatar" style={{ width: "100%" }} />
      </div> */}
    </>
  );
};

export default UploadAvatar;
import { Result } from "antd";

/*
 * @Author: 刘林
 * @Date: 2021-11-27 16:04:28
 * @LastEditors: 刘林
 * @LastEditTime: 2021-11-27 16:04:28
 */
export default () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
    />
  );
}
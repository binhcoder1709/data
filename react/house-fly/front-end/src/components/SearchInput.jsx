import React from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";

export default function SearchInput() {
    const { Search } = Input;
    const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <>
    <Search
      placeholder="input search text"
      allowClear
      onSearch={onSearch}
      style={{
        width: 200,
      }}
    />
    </>
  );
}

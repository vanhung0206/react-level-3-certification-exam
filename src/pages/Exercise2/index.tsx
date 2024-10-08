import { Button, Carousel, Input, Space, Switch, Typography } from "antd";
import { useState } from "react";
import Modal from "./Modal";

const customContentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Exercise2 = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [titleModal, setTitleModal] = useState("Title modal");
  const [isHiddenHeader, setIsHiddenHeader] = useState(false);
  const [isShowCustomHeader, setIsShowCustomHeader] = useState(false);

  const [contentModal, setContentModal] = useState("Text content");
  const [isShowCustomBody, setIsShowCustomBody] = useState(false);

  const [isHiddenFooter, setIsHiddenFooter] = useState(false);
  const [okText, setOkText] = useState("");
  const [closeText, setCloseText] = useState("");
  const [isShowCustomFooter, setIsShowCustomFooter] = useState(false);

  const [isOpenRegularDialog, setIsOpenRegularDialog] = useState(false);

  const onToggleModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  const onToggleRegularDialog = () => {
    setIsOpenRegularDialog((prev) => !prev);
  };

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <Space direction="vertical">
          <Space direction="vertical">
            <Button onClick={onToggleModal}>Open Modal</Button>
            <div>
              <Typography.Title level={5}>Title modal: </Typography.Title>
              <Input
                value={titleModal}
                onChange={(e) => setTitleModal(e.target.value)}
                placeholder="Enter title modal"
              />
            </div>

            <div>
              <Typography.Title level={5}>Hidden Header: </Typography.Title>
              <Switch
                checked={isHiddenHeader}
                onChange={() => setIsHiddenHeader((prev) => !prev)}
              />
            </div>

            <div>
              <Typography.Title level={5}>
                Show custom header modal:
              </Typography.Title>
              <Switch
                checked={isShowCustomHeader}
                onChange={() => setIsShowCustomHeader((prev) => !prev)}
              />
            </div>
          </Space>

          <Space direction="vertical" style={{ marginTop: 20 }}>
            <div>
              <Typography.Title level={5}>Text content: </Typography.Title>
              <Input
                value={contentModal}
                onChange={(e) => setContentModal(e.target.value)}
                placeholder="Enter content modal"
              />
            </div>

            <div>
              <Typography.Title level={5}>
                Show custom body modal:
              </Typography.Title>
              <Switch
                checked={isShowCustomBody}
                onChange={() => setIsShowCustomBody((prev) => !prev)}
              />
            </div>
          </Space>

          <Space direction="vertical" style={{ marginTop: 20 }}>
            <div>
              <Typography.Title level={5}>Hidden Footer: </Typography.Title>
              <Switch
                checked={isHiddenFooter}
                onChange={() => setIsHiddenFooter((prev) => !prev)}
              />
            </div>

            <div>
              <Typography.Title level={5}>
                Custom Ok Text button:
              </Typography.Title>
              <Input
                value={okText}
                onChange={(e) => setOkText(e.target.value)}
                placeholder="Enter Ok text button"
              />
            </div>

            <div>
              <Typography.Title level={5}>
                Custom Close Text button:
              </Typography.Title>
              <Input
                value={closeText}
                onChange={(e) => setCloseText(e.target.value)}
                placeholder="Enter close text button"
              />
            </div>

            <div>
              <Typography.Title level={5}>
                Show custom footer modal:
              </Typography.Title>
              <Switch
                checked={isShowCustomFooter}
                onChange={() => setIsShowCustomFooter((prev) => !prev)}
              />
            </div>
          </Space>
        </Space>
        <Space>
          <Button onClick={onToggleRegularDialog}>Open Regular Dialog</Button>
        </Space>
      </div>

      <Modal
        open={isOpenModal}
        title={titleModal}
        onToggle={onToggleModal}
        customHeader={
          isHiddenHeader ? null : isShowCustomHeader ? (
            <Typography.Title level={4}>Custom header</Typography.Title>
          ) : undefined
        }
        content={contentModal}
        customBody={
          isShowCustomBody ? (
            <Carousel>
              <div>
                <h3 style={customContentStyle}>Image 1</h3>
              </div>
              <div>
                <h3 style={customContentStyle}>Image 2</h3>
              </div>
              <div>
                <h3 style={customContentStyle}>Image 3</h3>
              </div>
              <div>
                <h3 style={customContentStyle}>Image 4</h3>
              </div>
            </Carousel>
          ) : undefined
        }
        customFooter={
          isHiddenFooter ? null : isShowCustomFooter ? (
            <Typography.Text mark>Custom footer</Typography.Text>
          ) : undefined
        }
        okText={okText}
        closeText={closeText}
      ></Modal>
      <Modal
        open={isOpenRegularDialog}
        onToggle={onToggleRegularDialog}
        isRegularDialog
        customHeader={null}
        okText="Yes"
        closeText="No"
      >
        Are you sure you want to do this?
      </Modal>
    </div>
  );
};

export default Exercise2;

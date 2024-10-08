import { CloseOutlined } from "@ant-design/icons";
import React from "react";
import { createPortal } from "react-dom";
import "./style.css";
import { Button } from "antd";

export type ModalProps = {
  open: boolean;
  onToggle: (open: boolean) => void;
  customHeader?: React.ReactNode;
  customBody?: React.ReactNode;
  customFooter?: React.ReactNode;
  title?: React.ReactNode;
  content?: React.ReactNode;
  children?: React.ReactNode;
  zIndex?: number;
  style?: React.CSSProperties;
  containerElement?: HTMLElement;
  closeIcon?: React.ReactNode;
  isHideCloseIcon?: boolean;
  closable?: boolean;
  okText?: string;
  onOkeButtonClick?: () => void;
  closeText?: string;
  onCloseButtonClick?: () => void;
  isRegularDialog?: boolean;
};

const Modal: React.FC<ModalProps> = (props) => {
  const getElement = (
    customElement: React.ReactNode,
    defaultElement: React.ReactNode
  ): React.ReactNode => {
    if (customElement === null) {
      return null;
    }

    if (customElement) {
      return customElement;
    }
    return defaultElement;
  };

  const getOptionsRender = () => {
    const headerElement = (
      <div className="modal-header">
        <div className="modal-title">{props.title}</div>
        <div className="modal-close-icon">
          {!props.isHideCloseIcon && (
            <button onClick={() => props.onToggle(false)}>
              {props.closeIcon || <CloseOutlined />}
            </button>
          )}
        </div>
      </div>
    );

    const bodyElement = (
      <div className="modal-body">{props.content || props.children}</div>
    );

    const footerElement = (
      <div className="modal-btns">
        <Button
          onClick={props.onCloseButtonClick || (() => props.onToggle(true))}
        >
          {props.closeText || "Close"}
        </Button>

        <Button type="primary" onClick={props.onOkeButtonClick}>
          {props.okText || "OK"}
        </Button>
      </div>
    );

    const modalStyle: React.CSSProperties = {
      ...props.style,
      minHeight: props.isRegularDialog ? 100 : undefined,
      width: props.isRegularDialog ? 300 : undefined,
      zIndex: props.zIndex,
    };

    return {
      header: getElement(props.customHeader, headerElement),
      body: getElement(props.customBody, bodyElement),
      footer: getElement(props.customFooter, footerElement),
      open: props.open,
      container: props.containerElement || document.body,
      closable: props.closable || true,
      modalStyle,
    };
  };

  const options = getOptionsRender();

  return createPortal(
    <>
      <div
        className={options.open ? "modal show" : "modal"}
        style={options.modalStyle}
      >
        {options.header}
        {options.body}
        {options.footer}
      </div>
      {!props.isRegularDialog && (
        <div
          className="overlay"
          onClick={options.closable ? () => props.onToggle(false) : undefined}
        />
      )}
    </>,
    options.container
  );
};

export default Modal;

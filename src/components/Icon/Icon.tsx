import { FC } from 'react';
import {
  AiFillEdit,
  AiFillDelete,
  AiOutlineRight,
  AiOutlineLogout,
  AiOutlineLogin,
  AiFillGithub,
  AiOutlineSearch,
  AiOutlineLeft,
  AiOutlineUser,
  AiOutlineCaretDown,
  AiOutlineCaretUp,
  AiOutlineReload,
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiOutlineMail,
  AiOutlineMenu,
} from 'src/icons';

interface IconComponentProps {
  type: string;
  width?: string;
  height?: string;
}

const icons = (type: string) => {
  switch (type) {
    case 'edit': {
      return <AiFillEdit />;
    }
    case 'remove': {
      return <AiFillDelete />;
    }
    case 'login': {
      return <AiOutlineLogin />;
    }
    case 'logout': {
      return <AiOutlineLogout />;
    }
    case 'github': {
      return <AiFillGithub />;
    }
    case 'search': {
      return <AiOutlineSearch />;
    }
    case 'arrow-left': {
      return <AiOutlineLeft />;
    }
    case 'arrow-right': {
      return <AiOutlineRight />;
    }
    case 'user': {
      return <AiOutlineUser />;
    }
    case 'reload': {
      return <AiOutlineReload />;
    }
    case 'open': {
      return <AiOutlineCaretDown />;
    }
    case 'close': {
      return <AiOutlineCaretUp />;
    }
    case 'email': {
      return <AiOutlineMail />;
    }
    case 'password-visible': {
      return <AiOutlineEye />;
    }
    case 'password-not-visible': {
      return <AiOutlineEyeInvisible />;
    }
    case 'burger': {
      return <AiOutlineMenu />;
    }
    default: {
      return <AiOutlineRight />;
    }
  }
};

export const IconComponent: FC<IconComponentProps> = ({
  type,
  width,
  height,
}) => {
  return (
    <>
      <i>{icons(type)}</i>
    </>
  );
};

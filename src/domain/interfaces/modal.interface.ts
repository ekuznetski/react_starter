import { ExtractComponentProps } from "./general.interface";

export interface IModalState<T = React.NamedExoticComponent> {
  isVisible: boolean;
  component: T;
  props?: ExtractComponentProps<T>;
  modalWrapperClassName?: string;
}

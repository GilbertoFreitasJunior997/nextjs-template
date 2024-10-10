import * as ResizablePrimitive from "react-resizable-panels";
import { ComponentProps } from "react";

export type ResizablePanelGroupProps = ComponentProps<
	typeof ResizablePrimitive.PanelGroup
>;

export type ResizableHandleProps = React.ComponentProps<
	typeof ResizablePrimitive.PanelResizeHandle
> & {
	withHandle?: boolean;
};

<<<<<<< HEAD
import type { ButtonProps as ChakraCloseButtonProps } from "@chakra-ui/react"
=======
import type { ButtonProps } from "@chakra-ui/react"
>>>>>>> main
import { IconButton as ChakraIconButton } from "@chakra-ui/react"
import * as React from "react"
import { LuX } from "react-icons/lu"

<<<<<<< HEAD
export interface CloseButtonProps extends ChakraCloseButtonProps {}
=======
export type CloseButtonProps = ButtonProps
>>>>>>> main

export const CloseButton = React.forwardRef<
  HTMLButtonElement,
  CloseButtonProps
>(function CloseButton(props, ref) {
  return (
    <ChakraIconButton variant="ghost" aria-label="Close" ref={ref} {...props}>
      {props.children ?? <LuX />}
    </ChakraIconButton>
  )
})

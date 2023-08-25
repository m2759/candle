
import { extendTheme } from "@chakra-ui/react"



const theme = extendTheme({
    styles: {
        global: {
          ".js-focus-visible :focus:not([data-focus-visible-added])": {
            outline: "none",
            boxShadow: "none",
          },
          
          // styles for the `body`
          body: {
            bg: "gray.800",
            color: "white",
          },
          // styles for the `a`
          a: {
            color: "teal.500",
            _hover: {
              textDecoration: "underline",
            },
          },
        },
      },
    })
export default theme
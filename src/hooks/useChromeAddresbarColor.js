import { useEffect } from "react";

export default function useChromeAddressbarColor({ colorHexa }) {
  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.content = colorHexa;
    }
  }, [colorHexa]);
}

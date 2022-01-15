// export const FB_PIXEL_ID = "1820610861383053"
export const FB_PIXEL_ID = "5356331157714441"

export const pageview = () => {
  window.fbq("track", "PageView")
}

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name, options = {}) => {
  window.fbq("track", name, options)
}

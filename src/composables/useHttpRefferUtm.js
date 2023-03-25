export function useHttpRefferUtm(url) {
  let searchString = ''

  if (url) {
    const newUrl = new URL(url)
    if (newUrl.search.indexOf('&') !== -1) {
      searchString = newUrl.search.slice(1).split('&')
    } else {
      searchString = newUrl.search.slice(1).split('&amp;')
    }
    return { reffer: url, ...searchStringToObj(searchString) }
  } else {
    return 'none'
  }
}

const searchStringToObj = (s) => {
  return s.reduce((accum, item) => {
    item = item.split('=')
    accum[item[0]] = item[1]
    return accum
  }, {})
}

function addLinks(linkObject, list) {
  for(const [link, text] of Object.entries(linkObject)) {
    let li = document.createElement('li')
    let a = document.createElement('a')
    a.href = link
    a.innerText = text
    li.appendChild(a)
    list.appendChild(li)
  }
}
const linkKeys = {
  "schedule.html": "Schedule of Activities",
  "registration.html": "Registration",
  "sizing.html": "Shirt Sizing",
  "rules.html": "Rules",
  // "accomodations.html": "Accomodations",
  "information.html": "Local Information",
  "about.html": "About"
  // "rules.html" : "Rules",
  // "downloads.html": "Downloads",
  // "./archive/2022/scoreboard" : "Scoreboard"
}

const sitemapLinks = {
  "index.html": "Home",
  "registration.html": "How to Register",
  // "accommodations.html": "Accommodations",
  "rules.html": "Rules",
  "about.html": "About"
}

const externalLinks = {
  "https://icpc.jp/apac/2025-26/rules/": "ICPC Asia Pacific Rules",
  "https://icpc.global/regionals/rules": "ICPC Regional Rules",
  "https://icpc.global": "ICPC Global"
}

const navList = document.querySelector('nav > ul')
const sitemap = document.querySelector('#sitemap')
const externalList = document.querySelector('#externalLinks')

addLinks(linkKeys, navList)
addLinks(sitemapLinks, sitemap)
addLinks(externalLinks, externalList)

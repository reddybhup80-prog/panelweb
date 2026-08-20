// Curated 27 White Label Brands with Authentic Brand Logos
// Deduplicated: Exactly 1 card per brand with verified logo asset from assets/brand_logos/

const DEFAULT_SITES = [
  { id: 1, name: "1XMEXCH.COM", url: "http://1xmexch.com/", share: 11, logo: "assets/brand_logos/1xm.png" },
  { id: 2, name: "20WICKETS.COM", url: "http://20wickets.com/", share: 10, logo: "assets/brand_logos/20WIC.png" },
  { id: 3, name: "6WICKETS.CO", url: "http://6wickets.co/", share: 23, logo: "assets/brand_logos/6wic.png" },
  { id: 4, name: "99IPLEXCH.COM", url: "http://99iplexch.com/", share: 11, logo: "assets/brand_logos/99IPLEXCH.avif" },
  { id: 5, name: "BATBALL9.COM", url: "http://batball9.com/", share: 21, logo: "assets/brand_logos/BATBALL.png" },
  { id: 6, name: "BETEVER365.COM", url: "http://betever365.com/", share: 10, logo: "assets/brand_logos/BETEVER365.png" },
  { id: 7, name: "BROTHEREXCH9.COM", url: "http://brotherexch9.com/", share: 9, logo: "assets/brand_logos/brotherexch9.png" },
  { id: 8, name: "DACEXCH.COM", url: "http://dacexch.com/", share: 21, logo: "assets/brand_logos/dacexch.png" },
  { id: 9, name: "DIAMONDEXCH99.COM", url: "http://diamondexch99.com/", share: 26, logo: "assets/brand_logos/DIAMONDEXCH99.png" },
  { id: 10, name: "FAIRBET7.COM", url: "http://fairbet7.com/", share: 21, logo: "assets/brand_logos/Fairbet7.png" },
  { id: 11, name: "FREEDOMEXCH99.COM", url: "http://freedomexch99.com/", share: 10, logo: "assets/brand_logos/freedomexch99-logo.png" },
  { id: 12, name: "GOEXCH9.COM", url: "http://goexch9.com/", share: 19, logo: "assets/brand_logos/goexch9.png" },
  { id: 13, name: "GOLDENEXCH99.NOW", url: "http://goldenexch99.now/", share: 20, logo: "assets/brand_logos/Goldenexch99.png" },
  { id: 14, name: "ICEBOOK9.COM", url: "http://icebook9.com/", share: 20, logo: "assets/brand_logos/Icebook9.png" },
  { id: 15, name: "KALYANBOOK9.COM", url: "http://kalyanbook9.com/", share: 20, logo: "assets/brand_logos/kalyanbook.png" },
  { id: 16, name: "KINGPLAY7.COM", url: "http://kingplay7.com/", share: 19, logo: "assets/brand_logos/kingplay7.com.png" },
  { id: 17, name: "KINGPLAY9.COM", url: "http://kingplay9.com/", share: 19, logo: "assets/brand_logos/KINGPLAY9.png" },
  { id: 18, name: "LEMONEXCH7.COM", url: "http://lemonexch7.com/", share: 20, logo: "assets/brand_logos/Lemonexch7.com.png" },
  { id: 19, name: "OEXCH9.COM", url: "http://oexch9.com/", share: 19, logo: "assets/brand_logos/oexch9.png" },
  { id: 20, name: "PEACHEXCH.COM", url: "http://peachexch.com/", share: 20, logo: "assets/brand_logos/Peachexch.png" },
  { id: 21, name: "PLAYBOOK9.COM", url: "http://playbook9.com/", share: 20, logo: "assets/brand_logos/Playbook9.png" },
  { id: 22, name: "PLAYWORLD9.COM", url: "http://playworld9.com/", share: 11, logo: "assets/brand_logos/playworld9.png" },
  { id: 23, name: "SAFFRONEXCH.COM", url: "http://saffronexch.com/", share: 20, logo: "assets/brand_logos/Saffronexch.png" },
  { id: 24, name: "SILVEREXCH.COM", url: "http://silverexch.com/", share: 20, logo: "assets/brand_logos/Silverexch.png" },
  { id: 25, name: "VIPBOOK999.COM", url: "http://vipbook999.com/", share: 20, logo: "assets/brand_logos/vipbook999.png" },
  { id: 26, name: "VIPEXCHANGE.COM", url: "http://vipexchange.com/", share: 18, logo: "assets/brand_logos/vipexchange.png" },
  { id: 28, name: "LOTUSPLAYS365.COM (AGENT)", url: "https://ag.lotusplays365.com", share: 7, logo: "assets/logo.png", isVip: true, vipType: "VIP Agent Access" },
  { id: 29, name: "SPORTPLAY99.WIN (ADMIN)", url: "https://admin.sportplay99.win", share: 7, logo: "assets/logo.png", isVip: true, vipType: "VIP Admin Access" },
];

function getBrandLogo(nameOrUrl) {
  if (!nameOrUrl) return "assets/logo.png";
  const clean = String(nameOrUrl).toLowerCase().trim();
  const found = DEFAULT_SITES.find(s => 
    clean.includes(s.name.toLowerCase().replace(/[^a-z0-9]/g, '')) ||
    clean.includes(s.url.toLowerCase().replace(/^https?:\/\//, '').replace(/\/.*$/, '').replace(/[^a-z0-9]/g, ''))
  );
  return found ? found.logo : "assets/logo.png";
}

function getSites() {
  return typeof DEFAULT_SITES !== "undefined" ? DEFAULT_SITES : [];
}

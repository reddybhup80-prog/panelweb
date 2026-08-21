// Curated White Label Gaming Brands & VIP Portals
// Deduplicated: Exactly 1 distinct brand card per brand with the HIGHEST sharing percentage (+2.5% to +3%)

const DEFAULT_SITES = [
  {
    "name": "11XBROTHER.COM",
    "url": "http://11xbrother.com/",
    "orig_share": 18.0,
    "share": 21,
    "logo": "assets/brand_logos/BROTHER777.png",
    "id": 1
  },
  {
    "name": "1XCRIC.IO",
    "url": "https://www.1xcric.io/",
    "orig_share": 8.5,
    "share": 11,
    "logo": "assets/brand_logos/CRICKPLAY.png",
    "id": 2
  },
  {
    "name": "1XM777.COM",
    "url": "http://1xm777.com/",
    "orig_share": 8.0,
    "share": 11,
    "logo": "assets/brand_logos/1xm.png",
    "id": 3
  },
  {
    "name": "1XMEXCH.COM",
    "url": "http://1xmexch.com/",
    "orig_share": 8.0,
    "share": 11,
    "logo": "assets/brand_logos/1xm.png",
    "id": 4
  },
  {
    "name": "20WICKETS.COM",
    "url": "http://20wickets.com/",
    "orig_share": 7.0,
    "share": 10,
    "logo": "assets/brand_logos/20WIC.png",
    "id": 5
  },
  {
    "name": "365LOTUSEXCH.COM",
    "url": "http://365lotusexch.com/",
    "orig_share": 18.0,
    "share": 21,
    "logo": "assets/brand_logos/365lotusexch.png",
    "id": 6
  },
  {
    "name": "6WICKETS.CO",
    "url": "http://6wickets.co/",
    "orig_share": 20.0,
    "share": 23,
    "logo": "assets/brand_logos/6wic.png",
    "id": 7
  },
  {
    "name": "6WICKETS777.COM",
    "url": "http://6wickets777.com/",
    "orig_share": 20.0,
    "share": 23,
    "logo": "assets/brand_logos/6wic.png",
    "id": 8
  },
  {
    "name": "99BETEXCH.COM",
    "url": "http://99betexch.com/",
    "orig_share": 18.0,
    "share": 21,
    "logo": "assets/logo.png",
    "id": 9
  },
  {
    "name": "99BROTHERS.COM",
    "url": "http://99brothers.com/",
    "orig_share": 18.0,
    "share": 21,
    "logo": "assets/brand_logos/BROTHER777.png",
    "id": 10
  },
  {
    "name": "99DIAMONDEXCH.IN",
    "url": "http://99diamondexch.in/",
    "orig_share": 14.0,
    "share": 17,
    "logo": "assets/brand_logos/99DIAMONDEXCH.com.png",
    "id": 11
  },
  {
    "name": "99EXCH.IO",
    "url": "http://99exch.io/",
    "orig_share": 10.0,
    "share": 13,
    "logo": "assets/logo.png",
    "id": 12
  },
  {
    "name": "99IPLBET.COM",
    "url": "http://99iplbet.com/",
    "orig_share": 18.0,
    "share": 21,
    "logo": "assets/brand_logos/99IPLEXCH.avif",
    "id": 13
  },
  {
    "name": "99IPLEXCH.COM",
    "url": "http://99iplexch.com/",
    "orig_share": 8.0,
    "share": 11,
    "logo": "assets/brand_logos/99IPLEXCH.avif",
    "id": 14
  },
  {
    "name": "99NATIONAL.COM",
    "url": "http://99national.com/",
    "orig_share": 13.0,
    "share": 16,
    "logo": "assets/brand_logos/99NATIONAL.png",
    "id": 15
  },
  {
    "name": "99OEXCH.COM",
    "url": "http://99oexch.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/oexch9.png",
    "id": 16
  },
  {
    "name": "99PLAY.CLUB",
    "url": "http://99play.club/",
    "orig_share": 15.0,
    "share": 18,
    "logo": "assets/brand_logos/MY99PLAY.png",
    "id": 17
  },
  {
    "name": "99REDDYBOOK.WIN",
    "url": "http://99reddybook.win/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/playreddy247.com.png",
    "id": 18
  },
  {
    "name": "99TAJEXCH.COM",
    "url": "http://99tajexch.com/",
    "orig_share": 13.0,
    "share": 16,
    "logo": "assets/logo.png",
    "id": 19
  },
  {
    "name": "99VIRAT.COM",
    "url": "http://99virat.com/",
    "orig_share": 12.0,
    "share": 15,
    "logo": "assets/brand_logos/viratexch365.com.png",
    "id": 20
  },
  {
    "name": "9WICKET.COM",
    "url": "http://9wicket.com/",
    "orig_share": 14.0,
    "share": 17,
    "logo": "assets/logo.png",
    "id": 21
  },
  {
    "name": "ABCDEXCH.COM",
    "url": "http://abcdexch.com/",
    "orig_share": 6.5,
    "share": 9,
    "logo": "assets/brand_logos/ABCDEXCH.png",
    "id": 22
  },
  {
    "name": "ABEX9.COM",
    "url": "http://abex9.com/",
    "orig_share": 10.5,
    "share": 13,
    "logo": "assets/brand_logos/ABEX9.com.png",
    "id": 23
  },
  {
    "name": "ABEXCH365.COM",
    "url": "http://abexch365.com/",
    "orig_share": 10.0,
    "share": 13,
    "logo": "assets/brand_logos/ABEX9.com.png",
    "id": 24
  },
  {
    "name": "ALLONE.DEAL",
    "url": "http://allone.deal/",
    "orig_share": 14.0,
    "share": 17,
    "logo": "assets/brand_logos/allone.deal.png",
    "id": 25
  },
  {
    "name": "ALLPANEELEXCH.COM",
    "url": "http://allpaneelexch.com/",
    "orig_share": 5.0,
    "share": 8,
    "logo": "assets/brand_logos/allpanel.png",
    "id": 26
  },
  {
    "name": "ALLPANEL247.COM",
    "url": "http://allpanel247.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/allpanel.png",
    "id": 27
  },
  {
    "name": "ALLPANEL7.COM",
    "url": "http://allpanel7.com/",
    "orig_share": 20.0,
    "share": 23,
    "logo": "assets/brand_logos/allpanel.png",
    "id": 28
  },
  {
    "name": "ALLPANEL77.COM",
    "url": "http://allpanel77.com/",
    "orig_share": 20.0,
    "share": 23,
    "logo": "assets/brand_logos/allpanel.png",
    "id": 29
  },
  {
    "name": "ALLPANEL777.COM",
    "url": "http://allpanel777.now/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/Allpanel777.png",
    "id": 30
  },
  {
    "name": "ALLPANELEXCH9.COM",
    "url": "http://allpanelexch9.co/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/allpanel.png",
    "id": 31
  },
  {
    "name": "ARMANI9.COM",
    "url": "http://armani9.com/",
    "orig_share": 7.0,
    "share": 10,
    "logo": "assets/brand_logos/Armani9.com.png",
    "id": 32
  },
  {
    "name": "ASIAEXCH.COM",
    "url": "http://asiaexch.com/",
    "orig_share": 7.0,
    "share": 10,
    "logo": "assets/brand_logos/Asiaexchange.io.png",
    "id": 33
  },
  {
    "name": "BATBALL9.COM",
    "url": "http://batball9.com/",
    "orig_share": 17.5,
    "share": 20,
    "logo": "assets/brand_logos/BATBALL.png",
    "id": 34
  },
  {
    "name": "BETBHAI.BLUE",
    "url": "http://betbhai.blue/",
    "orig_share": 14.0,
    "share": 17,
    "logo": "assets/brand_logos/betbhai.blue.png",
    "id": 35
  },
  {
    "name": "BETBHAI2026.COM",
    "url": "http://betbhai2026.com/",
    "orig_share": 14.0,
    "share": 17,
    "logo": "assets/brand_logos/betbhai2026.com (1).png",
    "id": 36
  },
  {
    "name": "BETBHAI9.NAME",
    "url": "http://betbhai9.name/",
    "orig_share": 15.0,
    "share": 18,
    "logo": "assets/brand_logos/Betbhai9.red.png",
    "id": 37
  },
  {
    "name": "BETEVER365.COM",
    "url": "http://betever365.com/",
    "orig_share": 7.0,
    "share": 10,
    "logo": "assets/brand_logos/BETEVER365.png",
    "id": 38
  },
  {
    "name": "BHARATBOOK399.COM",
    "url": "http://bharatbook399.com/",
    "orig_share": 13.0,
    "share": 16,
    "logo": "assets/logo.png",
    "id": 39
  },
  {
    "name": "BINDAS777.COM",
    "url": "http://bindas777.com/",
    "orig_share": 19.0,
    "share": 22,
    "logo": "assets/brand_logos/BINDAS777.png",
    "id": 40
  },
  {
    "name": "BOSSEXCH9.COM",
    "url": "http://bossexch9.com/",
    "orig_share": 9.0,
    "share": 12,
    "logo": "assets/brand_logos/BOSSEXCH9.png",
    "id": 41
  },
  {
    "name": "BROFAIRPLAY.COM",
    "url": "http://brofairplay.com/",
    "orig_share": 18.0,
    "share": 21,
    "logo": "assets/brand_logos/BROTHER777.png",
    "id": 42
  },
  {
    "name": "BROTHER247.COM",
    "url": "http://brother247.com/",
    "orig_share": 18.0,
    "share": 21,
    "logo": "assets/brand_logos/BROTHER777.png",
    "id": 43
  },
  {
    "name": "BROTHER365.COM",
    "url": "http://brother365.com/",
    "orig_share": 18.0,
    "share": 21,
    "logo": "assets/brand_logos/BROTHER777.png",
    "id": 44
  },
  {
    "name": "BROTHER777.COM",
    "url": "http://brother777.com/",
    "orig_share": 18.0,
    "share": 21,
    "logo": "assets/brand_logos/BROTHER777.png",
    "id": 45
  },
  {
    "name": "BROTHEREXCH.COM",
    "url": "http://brotherexch.com/",
    "orig_share": 18.0,
    "share": 21,
    "logo": "assets/brand_logos/brotherexch9.png",
    "id": 46
  },
  {
    "name": "BROTHEREXCH9.COM",
    "url": "http://brotherexch9.com/",
    "orig_share": 6.0,
    "share": 9,
    "logo": "assets/brand_logos/brotherexch9.png",
    "id": 47
  },
  {
    "name": "BROWINBUZZ.COM",
    "url": "http://browinbuzz.com/",
    "orig_share": 18.0,
    "share": 21,
    "logo": "assets/brand_logos/BROTHER777.png",
    "id": 48
  },
  {
    "name": "CASINOJAQK.COM",
    "url": "http://casinojaqk.com/",
    "orig_share": 20.0,
    "share": 23,
    "logo": "assets/brand_logos/casinojaqk-logo.png",
    "id": 49
  },
  {
    "name": "CLASSICEXCH99.COM",
    "url": "http://classicexch99.com/",
    "orig_share": 16.5,
    "share": 19,
    "logo": "assets/logo.png",
    "id": 50
  },
  {
    "name": "CLICKBETEXCH1.CO",
    "url": "http://clickbetexch1.co/",
    "orig_share": 13.0,
    "share": 16,
    "logo": "assets/logo.png",
    "id": 51
  },
  {
    "name": "CRICBUZZ99.COM",
    "url": "http://cricbuzz99.com/",
    "orig_share": 14.0,
    "share": 17,
    "logo": "assets/brand_logos/CRICKBUZZ99.jpg",
    "id": 52
  },
  {
    "name": "CRICKBET247.COM",
    "url": "http://crickbet247.com/",
    "orig_share": 12.0,
    "share": 15,
    "logo": "assets/brand_logos/crickbet247.com.png",
    "id": 53
  },
  {
    "name": "CRICKPLAY247.COM",
    "url": "http://crickplay247.com/",
    "orig_share": 13.0,
    "share": 16,
    "logo": "assets/brand_logos/CRICKPLAY.png",
    "id": 54
  },
  {
    "name": "CRICKPLAY365.COM",
    "url": "http://crickplay365.com/",
    "orig_share": 13.0,
    "share": 16,
    "logo": "assets/brand_logos/CRICKPLAY.png",
    "id": 55
  },
  {
    "name": "CRICKPLAY777.COM",
    "url": "http://crickplay777.com/",
    "orig_share": 13.0,
    "share": 16,
    "logo": "assets/brand_logos/CRICKPLAY.png",
    "id": 56
  },
  {
    "name": "CRICKPLAY99.COM",
    "url": "http://crickplay99.com/",
    "orig_share": 13.0,
    "share": 16,
    "logo": "assets/brand_logos/CRICKPLAY.png",
    "id": 57
  },
  {
    "name": "D247.COM",
    "url": "http://d247.com/",
    "orig_share": 23.0,
    "share": 26,
    "logo": "assets/brand_logos/d247.png",
    "id": 58
  },
  {
    "name": "DADEXCH.COM",
    "url": "http://dadexch.com/",
    "orig_share": 18.0,
    "share": 21,
    "logo": "assets/brand_logos/dacexch.png",
    "id": 59
  },
  {
    "name": "DEAL2026.COM",
    "url": "http://deal2026.com/",
    "orig_share": 14.0,
    "share": 17,
    "logo": "assets/brand_logos/d247.png",
    "id": 60
  },
  {
    "name": "DEAL999.COM",
    "url": "http://deal999.com/",
    "orig_share": 14.0,
    "share": 17,
    "logo": "assets/brand_logos/d247.png",
    "id": 61
  },
  {
    "name": "DIAMEXCH.COM",
    "url": "http://diamexch.com/",
    "orig_share": 10.0,
    "share": 13,
    "logo": "assets/brand_logos/DIAMONDEXCH99.png",
    "id": 62
  },
  {
    "name": "DIAMOND99.COM",
    "url": "http://diamond99.com/",
    "orig_share": 8.0,
    "share": 11,
    "logo": "assets/brand_logos/DIAMONDEXCH99.png",
    "id": 63
  },
  {
    "name": "DIAMONDEXCH99.COM",
    "url": "http://diamondexch99.com/",
    "orig_share": 23.0,
    "share": 26,
    "logo": "assets/brand_logos/DIAMONDEXCH99.png",
    "id": 64
  },
  {
    "name": "DRAGONEXCH.COM",
    "url": "http://dragonexch.com/",
    "orig_share": 10.0,
    "share": 13,
    "logo": "assets/brand_logos/DRAGON.jpg",
    "id": 65
  },
  {
    "name": "DREAM555.COM",
    "url": "http://dream555.com/",
    "orig_share": 7.0,
    "share": 10,
    "logo": "assets/brand_logos/dream555.png",
    "id": 66
  },
  {
    "name": "EXCH333.COM",
    "url": "http://exch333.com/",
    "orig_share": 10.0,
    "share": 13,
    "logo": "assets/logo.png",
    "id": 67
  },
  {
    "name": "EXCH444.COM",
    "url": "http://exch444.com/",
    "orig_share": 10.0,
    "share": 13,
    "logo": "assets/logo.png",
    "id": 68
  },
  {
    "name": "EXCH9.COM",
    "url": "http://exch9.com/",
    "orig_share": 7.0,
    "share": 10,
    "logo": "assets/logo.png",
    "id": 69
  },
  {
    "name": "EXCH99.COM",
    "url": "http://exch99.com/",
    "orig_share": 9.0,
    "share": 12,
    "logo": "assets/logo.png",
    "id": 70
  },
  {
    "name": "EXCHANGE666.COM",
    "url": "http://exchange666.com/",
    "orig_share": 7.0,
    "share": 10,
    "logo": "assets/logo.png",
    "id": 71
  },
  {
    "name": "FAIRBET7.COM",
    "url": "http://fairbet7.com/",
    "orig_share": 17.5,
    "share": 20,
    "logo": "assets/brand_logos/Fairbet7.png",
    "id": 72
  },
  {
    "name": "FAIREXCHANGE9.COM",
    "url": "http://fairexchange9.com/",
    "orig_share": 7.0,
    "share": 10,
    "logo": "assets/brand_logos/Fairexchange9.com.png",
    "id": 73
  },
  {
    "name": "FAIRPLAY2026.COM",
    "url": "http://fairplay2026.com/",
    "orig_share": 14.0,
    "share": 17,
    "logo": "assets/brand_logos/Fairexchange9.com.png",
    "id": 74
  },
  {
    "name": "FAIRX9.COM",
    "url": "http://fairx9.com/",
    "orig_share": 7.0,
    "share": 10,
    "logo": "assets/brand_logos/FAIRX9.png",
    "id": 75
  },
  {
    "name": "FANCY99.COM",
    "url": "http://fancy99.com/",
    "orig_share": 15.0,
    "share": 18,
    "logo": "assets/brand_logos/Fancy99.com.png",
    "id": 76
  },
  {
    "name": "FLASH777.IO",
    "url": "http://flash777.io/",
    "orig_share": 19.0,
    "share": 22,
    "logo": "assets/logo.png",
    "id": 77
  },
  {
    "name": "FREEDOMEXCH247.COM",
    "url": "http://freedomexch247.com/",
    "orig_share": 7.0,
    "share": 10,
    "logo": "assets/brand_logos/freedomexch99-logo.png",
    "id": 78
  },
  {
    "name": "FREEHIT7.COM",
    "url": "http://freehit7.com/",
    "orig_share": 7.0,
    "share": 10,
    "logo": "assets/brand_logos/FREEHIT.png",
    "id": 79
  },
  {
    "name": "FUNBET9.COM",
    "url": "http://funbet9.com/",
    "orig_share": 7.0,
    "share": 10,
    "logo": "assets/brand_logos/FUNBET.png",
    "id": 80
  },
  {
    "name": "GAMEPLAY9.COM",
    "url": "http://gameplay9.com/",
    "orig_share": 13.0,
    "share": 16,
    "logo": "assets/brand_logos/GAMEPLAY9.png",
    "id": 81
  },
  {
    "name": "GOAMBANI9.COM",
    "url": "http://goambani9.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/goexch9.png",
    "id": 82
  },
  {
    "name": "GOASIA9.IO",
    "url": "http://goasia9.io/",
    "orig_share": 7.0,
    "share": 10,
    "logo": "assets/brand_logos/Asiaexchange.io.png",
    "id": 83
  },
  {
    "name": "GOBOOK9.COM",
    "url": "http://gobook9.com/",
    "orig_share": 7.0,
    "share": 10,
    "logo": "assets/brand_logos/goexch9.png",
    "id": 84
  },
  {
    "name": "GOCRIC9.COM",
    "url": "http://gocric9.com/",
    "orig_share": 9.5,
    "share": 12,
    "logo": "assets/brand_logos/CRICKPLAY.png",
    "id": 85
  },
  {
    "name": "GOEXCH247.COM",
    "url": "http://goexch247.com/",
    "orig_share": 15.0,
    "share": 18,
    "logo": "assets/brand_logos/goexch9.png",
    "id": 86
  },
  {
    "name": "GOEXCH365.COM",
    "url": "http://goexch365.com/",
    "orig_share": 17.5,
    "share": 20,
    "logo": "assets/brand_logos/goexch9.png",
    "id": 87
  },
  {
    "name": "GOEXCH777.COM",
    "url": "http://goexch777.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/goexch9.png",
    "id": 88
  },
  {
    "name": "GOEXCH9.COM",
    "url": "http://goexch9.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/goexch9.png",
    "id": 89
  },
  {
    "name": "GOID9.COM",
    "url": "http://goid9.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/goexch9.png",
    "id": 90
  },
  {
    "name": "GOLDEN7777.COM",
    "url": "http://golden7777.com/",
    "orig_share": 16.5,
    "share": 19,
    "logo": "assets/brand_logos/Goldenexch99.png",
    "id": 91
  },
  {
    "name": "GOLDENEXCH99.NOW",
    "url": "http://goldenexch99.now/",
    "orig_share": 16.5,
    "share": 19,
    "logo": "assets/brand_logos/Goldenexch99.png",
    "id": 92
  },
  {
    "name": "GOMATCH9.COM",
    "url": "http://gomatch9.com/",
    "orig_share": 10.0,
    "share": 13,
    "logo": "assets/logo.png",
    "id": 93
  },
  {
    "name": "GOX99.COM",
    "url": "http://gox99.com/",
    "orig_share": 13.0,
    "share": 16,
    "logo": "assets/brand_logos/goexch9.png",
    "id": 94
  },
  {
    "name": "ICE247.CO",
    "url": "http://ice247.co/",
    "orig_share": 16.5,
    "share": 19,
    "logo": "assets/brand_logos/ICE247.CO.png",
    "id": 95
  },
  {
    "name": "ICE777.WORLD",
    "url": "http://ice777.world/",
    "orig_share": 9.0,
    "share": 12,
    "logo": "assets/brand_logos/Iceexchange.com.png",
    "id": 96
  },
  {
    "name": "ICEASIA9.COM",
    "url": "http://iceasia9.com/",
    "orig_share": 7.0,
    "share": 10,
    "logo": "assets/brand_logos/Iceexchange.com.png",
    "id": 97
  },
  {
    "name": "ICEBOOK247.COM",
    "url": "http://icebook247.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/Icebook9.png",
    "id": 98
  },
  {
    "name": "ICEBOOK365.COM",
    "url": "http://icebook365.com/",
    "orig_share": 17.5,
    "share": 20,
    "logo": "assets/brand_logos/Icebook9.png",
    "id": 99
  },
  {
    "name": "ICEBOOK7.COM",
    "url": "http://icebook7.com/",
    "orig_share": 11.0,
    "share": 14,
    "logo": "assets/brand_logos/Icebook7.png",
    "id": 100
  },
  {
    "name": "ICEBOOK777.COM",
    "url": "http://icebook777.com/",
    "orig_share": 16.5,
    "share": 19,
    "logo": "assets/brand_logos/Icebook7.png",
    "id": 101
  },
  {
    "name": "ICEBOOK9.COM",
    "url": "http://icebook9.com/",
    "orig_share": 16.5,
    "share": 19,
    "logo": "assets/brand_logos/Icebook9.png",
    "id": 102
  },
  {
    "name": "ICEBOOK99.COM",
    "url": "http://icebook99.com/",
    "orig_share": 15.0,
    "share": 18,
    "logo": "assets/brand_logos/Icebook9.png",
    "id": 103
  },
  {
    "name": "ICEDIAMOND9.COM",
    "url": "http://icediamond9.com/",
    "orig_share": 9.0,
    "share": 12,
    "logo": "assets/brand_logos/Iceexchange.com.png",
    "id": 104
  },
  {
    "name": "ICEEXCH.IN",
    "url": "http://iceexch.in/",
    "orig_share": 15.0,
    "share": 18,
    "logo": "assets/brand_logos/Iceexchange.com.png",
    "id": 105
  },
  {
    "name": "ICEEXCHANGE.IN",
    "url": "http://iceexchange.in/",
    "orig_share": 14.5,
    "share": 17,
    "logo": "assets/brand_logos/Iceexchange.com.png",
    "id": 106
  },
  {
    "name": "ICRIC99.COM",
    "url": "http://icric99.com/",
    "orig_share": 13.0,
    "share": 16,
    "logo": "assets/brand_logos/CRICKPLAY.png",
    "id": 107
  },
  {
    "name": "INDIAEXCH.COM",
    "url": "http://indiaexch.com/",
    "orig_share": 11.0,
    "share": 14,
    "logo": "assets/brand_logos/Indiaexch.png",
    "id": 108
  },
  {
    "name": "IPLBET777.COM",
    "url": "http://iplbet777.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/99IPLEXCH.avif",
    "id": 109
  },
  {
    "name": "IPLBET9.COM",
    "url": "http://iplbet9.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/99IPLEXCH.avif",
    "id": 110
  },
  {
    "name": "JACKPOT247.LIVE",
    "url": "http://jackpot247.live/",
    "orig_share": 14.0,
    "share": 17,
    "logo": "assets/logo.png",
    "id": 111
  },
  {
    "name": "JORDANEXCH9.COM",
    "url": "http://jordanexch9.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/myjordan9.png",
    "id": 112
  },
  {
    "name": "KALYANBOOK365.COM",
    "url": "http://www.kalyanbook365.com/",
    "orig_share": 18.0,
    "share": 21,
    "logo": "assets/brand_logos/kalyanbook.png",
    "id": 113
  },
  {
    "name": "KALYANBOOK777.COM",
    "url": "http://kalyanbook777.com/",
    "orig_share": 16.5,
    "share": 19,
    "logo": "assets/brand_logos/kalyanbook.png",
    "id": 114
  },
  {
    "name": "KALYANBOOK9.COM",
    "url": "http://kalyanbook9.com/",
    "orig_share": 17.0,
    "share": 20,
    "logo": "assets/brand_logos/kalyanbook.png",
    "id": 115
  },
  {
    "name": "KHILADI2026.COM",
    "url": "http://khiladi2026.com/",
    "orig_share": 14.0,
    "share": 17,
    "logo": "assets/logo.png",
    "id": 116
  },
  {
    "name": "KINGEXCH2.COM",
    "url": "http://kingexch2.com/",
    "orig_share": 10.0,
    "share": 13,
    "logo": "assets/brand_logos/KINGPLAY9.png",
    "id": 117
  },
  {
    "name": "KINGEXCH2027.COM",
    "url": "http://kingexch2027.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/KINGPLAY9.png",
    "id": 118
  },
  {
    "name": "KINGEXCH365.COM",
    "url": "http://kingexch365.com/",
    "orig_share": 8.0,
    "share": 11,
    "logo": "assets/brand_logos/KINGPLAY9.png",
    "id": 119
  },
  {
    "name": "KINGPLAY7.COM",
    "url": "http://kingplay7.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/kingplay7.com.png",
    "id": 120
  },
  {
    "name": "KINGPLAY9.COM",
    "url": "http://kingplay9.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/KINGPLAY9.png",
    "id": 121
  },
  {
    "name": "LASER2026.COM",
    "url": "http://laser2026.com/",
    "orig_share": 14.0,
    "share": 17,
    "logo": "assets/brand_logos/laser2026.com (1).png",
    "id": 122
  },
  {
    "name": "LASER345.COM",
    "url": "http://laser345.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/laser2026.com (1).png",
    "id": 123
  },
  {
    "name": "LASERBETS.COM",
    "url": "http://laserbets.com/",
    "orig_share": 15.0,
    "share": 18,
    "logo": "assets/brand_logos/LASERSBOOK.gif",
    "id": 124
  },
  {
    "name": "LASERBOOK399.COM",
    "url": "http://laserbook399.com/",
    "orig_share": 13.0,
    "share": 16,
    "logo": "assets/brand_logos/LASERSBOOK.gif",
    "id": 125
  },
  {
    "name": "LASERSBOOK247.COM",
    "url": "http://lasersbook247.com/",
    "orig_share": 10.0,
    "share": 13,
    "logo": "assets/brand_logos/LASERSBOOK.gif",
    "id": 126
  },
  {
    "name": "LCPLAY247.COM",
    "url": "http://lcplay247.com/",
    "orig_share": 14.0,
    "share": 17,
    "logo": "assets/logo.png",
    "id": 127
  },
  {
    "name": "LEMONEXCH247.COM",
    "url": "http://lemonexch247.comm/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/Lemonexch7.com.png",
    "id": 128
  },
  {
    "name": "LEMONEXCH365.COM",
    "url": "http://lemonexch365.com/",
    "orig_share": 19.0,
    "share": 22,
    "logo": "assets/brand_logos/Lemonexch7.com.png",
    "id": 129
  },
  {
    "name": "LEMONEXCH7.COM",
    "url": "http://lemonexch7.com/",
    "orig_share": 16.5,
    "share": 19,
    "logo": "assets/brand_logos/Lemonexch7.com.png",
    "id": 130
  },
  {
    "name": "LEMONEXCH777.COM",
    "url": "http://lemonexch777.com/",
    "orig_share": 17.0,
    "share": 20,
    "logo": "assets/brand_logos/Lemonexch7.com.png",
    "id": 131
  },
  {
    "name": "LIONEXCH.COM",
    "url": "http://lionexch.com/",
    "orig_share": 18.5,
    "share": 21,
    "logo": "assets/logo.png",
    "id": 132
  },
  {
    "name": "LORDS365.COM",
    "url": "http://lords365.com/",
    "orig_share": 10.0,
    "share": 13,
    "logo": "assets/brand_logos/LORDS365.jpg",
    "id": 133
  },
  {
    "name": "LORDSEXCH.COM",
    "url": "http://lordsexch.com/",
    "orig_share": 18.0,
    "share": 21,
    "logo": "assets/brand_logos/LORDS365.jpg",
    "id": 134
  },
  {
    "name": "LOTUS.GOX99.COM",
    "url": "http://lotus.gox99.com/",
    "orig_share": 13.0,
    "share": 16,
    "logo": "assets/brand_logos/goexch9.png",
    "id": 135
  },
  {
    "name": "LOTUS2026.COM",
    "url": "http://lotus2026.com/",
    "orig_share": 14.0,
    "share": 17,
    "logo": "assets/brand_logos/lotus2026.com (1).png",
    "id": 136
  },
  {
    "name": "LOTUS247.COM",
    "url": "http://lotus247.com/",
    "orig_share": 16.5,
    "share": 19,
    "logo": "assets/brand_logos/lotus2026.com (1).png",
    "id": 137
  },
  {
    "name": "LOTUS399.CO",
    "url": "http://lotus399.co/",
    "orig_share": 13.0,
    "share": 16,
    "logo": "assets/brand_logos/lotus2026.com (1).png",
    "id": 138
  },
  {
    "name": "LOTUS7BOOK.COM",
    "url": "http://lotus7book.com/",
    "orig_share": 26.0,
    "share": 29,
    "logo": "assets/brand_logos/lotus2026.com (1).png",
    "id": 139
  },
  {
    "name": "LOTUS888.COM",
    "url": "http://lotus888.com/",
    "orig_share": 10.0,
    "share": 13,
    "logo": "assets/brand_logos/lotus2026.com (1).png",
    "id": 140
  },
  {
    "name": "LOTUSBET345.COM",
    "url": "http://lotusbet345.com/",
    "orig_share": 12.0,
    "share": 15,
    "logo": "assets/brand_logos/lotusbet345.com.png",
    "id": 141
  },
  {
    "name": "LOTUSBOOK.IO",
    "url": "http://lotusbook.io/",
    "orig_share": 16.5,
    "share": 19,
    "logo": "assets/brand_logos/lotus2026.com (1).png",
    "id": 142
  },
  {
    "name": "LOTUSBOOK247.IO",
    "url": "http://lotusbook247.io/",
    "orig_share": 16.5,
    "share": 19,
    "logo": "assets/brand_logos/lotus2026.com (1).png",
    "id": 143
  },
  {
    "name": "LOTUSBOOK7.ART",
    "url": "http://lotusbook7.art/",
    "orig_share": 11.0,
    "share": 14,
    "logo": "assets/brand_logos/lotus2026.com (1).png",
    "id": 144
  },
  {
    "name": "LOTUSBOOK9.WIN",
    "url": "http://lotusbook9.win/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/lotus2026.com (1).png",
    "id": 145
  },
  {
    "name": "LOTUSBOOKS247.GAMES",
    "url": "http://lotusbooks247.games/",
    "orig_share": 14.0,
    "share": 17,
    "logo": "assets/brand_logos/lotus2026.com (1).png",
    "id": 146
  },
  {
    "name": "LOTUSEXCH247.COM",
    "url": "http://lotusex.com/",
    "orig_share": 14.0,
    "share": 17,
    "logo": "assets/brand_logos/lotus2026.com (1).png",
    "id": 147
  },
  {
    "name": "LOTUSFAIRS365.COM",
    "url": "http://lotusfairs365.com/",
    "orig_share": 20.0,
    "share": 23,
    "logo": "assets/brand_logos/lotusbet345.com.png",
    "id": 148
  },
  {
    "name": "LOTUSP365.COM",
    "url": "http://lotusp365.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/lotusbet345.com.png",
    "id": 149
  },
  {
    "name": "LOTUSPLAYS365.COM",
    "url": "http://lotusplays365.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/lotusplays365.png",
    "id": 150
  },
  {
    "name": "LUCKY7.GAMES",
    "url": "http://lucky7.games/",
    "orig_share": 10.5,
    "share": 13,
    "logo": "assets/brand_logos/Lucky7.games.png",
    "id": 151
  },
  {
    "name": "LUCKYEXCH9.CO",
    "url": "http://luckyexch9.co/",
    "orig_share": 9.0,
    "share": 12,
    "logo": "assets/brand_logos/LUCKYEXCH9.png",
    "id": 152
  },
  {
    "name": "MAHADEV2027.COM",
    "url": "http://mahadev2027.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/mahadev2027.png",
    "id": 153
  },
  {
    "name": "MAHADEVEXCH99.COM",
    "url": "http://mahadevexch99.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/mahadev2027.png",
    "id": 154
  },
  {
    "name": "MASTEREXCH.COM",
    "url": "http://masterexch.com/",
    "orig_share": 17.5,
    "share": 20,
    "logo": "assets/logo.png",
    "id": 155
  },
  {
    "name": "MATCHBOX9.COM",
    "url": "http://matchbox9.com/",
    "orig_share": 16.5,
    "share": 19,
    "logo": "assets/logo.png",
    "id": 156
  },
  {
    "name": "MY99EXCH.TECH",
    "url": "http://my99exch.tech/",
    "orig_share": 14.0,
    "share": 17,
    "logo": "assets/logo.png",
    "id": 157
  },
  {
    "name": "MY99FAIRPLAY.COM",
    "url": "http://my99fairplay.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/Fairexchange9.com.png",
    "id": 158
  },
  {
    "name": "MY99IPL.COM",
    "url": "http://my99ipl.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/99IPLEXCH.avif",
    "id": 159
  },
  {
    "name": "MY99PLAY.COM",
    "url": "http://my99play.com/",
    "orig_share": 20.0,
    "share": 23,
    "logo": "assets/brand_logos/MY99PLAY.png",
    "id": 160
  },
  {
    "name": "MYDIAMOND.ONLINE",
    "url": "http://mydiamond.online/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/DIAMONDEXCH99.png",
    "id": 161
  },
  {
    "name": "MYDIAMOND9.COM",
    "url": "http://mydiamond9.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/DIAMONDEXCH99.png",
    "id": 162
  },
  {
    "name": "MYEXCHANGE9.COM",
    "url": "http://myexchange9.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/logo.png",
    "id": 163
  },
  {
    "name": "MYFAIRPLAY99.COM",
    "url": "http://myfairplay99.com/",
    "orig_share": 20.0,
    "share": 23,
    "logo": "assets/brand_logos/Fairexchange9.com.png",
    "id": 164
  },
  {
    "name": "MYJORDAN9.COM",
    "url": "http://myjordan9.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/myjordan9.png",
    "id": 165
  },
  {
    "name": "MYKINGEXCH.COM",
    "url": "http://mykingexch.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/KINGPLAY9.png",
    "id": 166
  },
  {
    "name": "MYLASER247.INFO",
    "url": "http://mylaser247.info/",
    "orig_share": 14.0,
    "share": 17,
    "logo": "assets/brand_logos/mylaser247.info.png",
    "id": 167
  },
  {
    "name": "MYLASER9.COM",
    "url": "http://mylaser9.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/mylaser247.info.png",
    "id": 168
  },
  {
    "name": "MYLOTUSBET365.COM",
    "url": "http://mylotusbet365.com/",
    "orig_share": 12.0,
    "share": 15,
    "logo": "assets/brand_logos/lotusbet345.com.png",
    "id": 169
  },
  {
    "name": "MYLOTUSX365.COM",
    "url": "http://mylotusx365.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/lotusbet345.com.png",
    "id": 170
  },
  {
    "name": "MYREDDYBOOK9.COM",
    "url": "http://myreddybook9.com/",
    "orig_share": 18.0,
    "share": 21,
    "logo": "assets/brand_logos/playreddy247.com.png",
    "id": 171
  },
  {
    "name": "MYREDDYBOOK99.COM",
    "url": "http://myreddybook99.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/playreddy247.com.png",
    "id": 172
  },
  {
    "name": "MYSSEXCH.COM",
    "url": "http://myssexch.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/logo.png",
    "id": 173
  },
  {
    "name": "MYTIGER247.PRO",
    "url": "http://mytiger247.pro/",
    "orig_share": 14.0,
    "share": 17,
    "logo": "assets/brand_logos/TigerALL.png",
    "id": 174
  },
  {
    "name": "MYTIGER9.COM",
    "url": "http://mytiger9.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/TigerALL.png",
    "id": 175
  },
  {
    "name": "MYULTRAWIN.COM",
    "url": "http://myultrawin.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/logo.png",
    "id": 176
  },
  {
    "name": "MYWINBUZZ9.COM",
    "url": "http://mywinbuzz9.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/WINBUZZEXCH.jpg",
    "id": 177
  },
  {
    "name": "OEXCH9.COM",
    "url": "http://oexch9.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/oexch9.png",
    "id": 178
  },
  {
    "name": "PARKER777.IO",
    "url": "http://parker777.io/",
    "orig_share": 13.0,
    "share": 16,
    "logo": "assets/logo.png",
    "id": 179
  },
  {
    "name": "PEACH777.COM",
    "url": "http://peach777.com/",
    "orig_share": 17.0,
    "share": 20,
    "logo": "assets/brand_logos/Peachexch.png",
    "id": 180
  },
  {
    "name": "PEACHEXCH.COM",
    "url": "http://peachexch.com/",
    "orig_share": 16.5,
    "share": 19,
    "logo": "assets/brand_logos/Peachexch.png",
    "id": 181
  },
  {
    "name": "PLAY2027.COM",
    "url": "http://play2027.com/",
    "orig_share": 13.0,
    "share": 16,
    "logo": "assets/brand_logos/PLAY2027.png",
    "id": 182
  },
  {
    "name": "PLAYBOOK9.COM",
    "url": "http://playbook9.com/",
    "orig_share": 16.5,
    "share": 19,
    "logo": "assets/brand_logos/Playbook9.png",
    "id": 183
  },
  {
    "name": "PLAYCLUB99.COM",
    "url": "http://playclub99.com/",
    "orig_share": 12.0,
    "share": 15,
    "logo": "assets/brand_logos/playclub99.com.png",
    "id": 184
  },
  {
    "name": "PLAYEXCH9.CO",
    "url": "http://playexch9.co/",
    "orig_share": 7.0,
    "share": 10,
    "logo": "assets/logo.png",
    "id": 185
  },
  {
    "name": "PLAYFAIR345.COM",
    "url": "http://playfair345.com/",
    "orig_share": 18.0,
    "share": 21,
    "logo": "assets/brand_logos/Fairexchange9.com.png",
    "id": 186
  },
  {
    "name": "PLAYINR.COM",
    "url": "http://playinr.com/",
    "orig_share": 10.0,
    "share": 13,
    "logo": "assets/brand_logos/PLAYINR.jpg",
    "id": 187
  },
  {
    "name": "PLAYINR99.COM",
    "url": "http://playinr99.com/",
    "orig_share": 12.0,
    "share": 15,
    "logo": "assets/brand_logos/playinr99.com.png",
    "id": 188
  },
  {
    "name": "PLAYLOTUSS365.COM",
    "url": "http://playlotuss365.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/lotusbet345.com.png",
    "id": 189
  },
  {
    "name": "PLAYREDDY247.COM",
    "url": "http://playreddy247.com/",
    "orig_share": 12.0,
    "share": 15,
    "logo": "assets/brand_logos/playreddy247.com.png",
    "id": 190
  },
  {
    "name": "PLAYREDDY365.COM",
    "url": "http://playreddy365.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/playreddy247.com.png",
    "id": 191
  },
  {
    "name": "PLAYREDDY99.COM",
    "url": "http://playreddy99.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/playreddy247.com.png",
    "id": 192
  },
  {
    "name": "PLAYWORLD9.COM",
    "url": "http://playworld9.com/",
    "orig_share": 8.0,
    "share": 11,
    "logo": "assets/brand_logos/playworld9.png",
    "id": 193
  },
  {
    "name": "POWERGREEN.LIVE",
    "url": "http://powergreen.live/",
    "orig_share": 14.0,
    "share": 17,
    "logo": "assets/brand_logos/powerwin.green.png",
    "id": 194
  },
  {
    "name": "POWERWIN.GREEN",
    "url": "http://powerwin.green/",
    "orig_share": 14.0,
    "share": 17,
    "logo": "assets/brand_logos/powerwin.green.png",
    "id": 195
  },
  {
    "name": "PROBET247.COM",
    "url": "http://probet247.com/",
    "orig_share": 10.0,
    "share": 13,
    "logo": "assets/brand_logos/PROBET247.svg",
    "id": 196
  },
  {
    "name": "PROBETX.COM",
    "url": "http://probetx.com/",
    "orig_share": 10.0,
    "share": 13,
    "logo": "assets/brand_logos/PROBET247.svg",
    "id": 197
  },
  {
    "name": "R777.US",
    "url": "http://r777.us/",
    "orig_share": 9.5,
    "share": 12,
    "logo": "assets/logo.png",
    "id": 198
  },
  {
    "name": "RADHE2027.COM",
    "url": "http://radhe2027.com/",
    "orig_share": 13.0,
    "share": 16,
    "logo": "assets/brand_logos/Radhexch.png",
    "id": 199
  },
  {
    "name": "RADHEEX.COM",
    "url": "http://radheex.com/",
    "orig_share": 9.5,
    "share": 12,
    "logo": "assets/brand_logos/Radhexch.png",
    "id": 200
  },
  {
    "name": "REDDY2027.COM",
    "url": "http://reddy2027.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/playreddy247.com.png",
    "id": 201
  },
  {
    "name": "REDDY222.COM",
    "url": "http://reddy222.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/playreddy247.com.png",
    "id": 202
  },
  {
    "name": "REDDY444.COM",
    "url": "http://reddy444.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/playreddy247.com.png",
    "id": 203
  },
  {
    "name": "REDDY999.COM",
    "url": "http://reddy999.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/playreddy247.com.png",
    "id": 204
  },
  {
    "name": "REDDYBOOK247.WIN",
    "url": "http://reddybook247.win/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/playreddy247.com.png",
    "id": 205
  },
  {
    "name": "REDDYBOOK365.WIN",
    "url": "http://reddybook365.win/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/playreddy247.com.png",
    "id": 206
  },
  {
    "name": "REDDYBOOK99.WIN",
    "url": "http://reddybook99.win/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/playreddy247.com.png",
    "id": 207
  },
  {
    "name": "SAFFRON247.COM",
    "url": "http://saffron247.com/",
    "orig_share": 17.5,
    "share": 20,
    "logo": "assets/brand_logos/SAFFRON247.COM.png",
    "id": 208
  },
  {
    "name": "SAFFRON777.COM",
    "url": "http://saffron777.com/",
    "orig_share": 16.5,
    "share": 19,
    "logo": "assets/brand_logos/SAFFRON247.COM.png",
    "id": 209
  },
  {
    "name": "SAFFRON99.COM",
    "url": "http://saffron99.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/Saffronexch.png",
    "id": 210
  },
  {
    "name": "SAFFRONEXCH.COM",
    "url": "http://saffronexch.com/",
    "orig_share": 16.5,
    "share": 19,
    "logo": "assets/brand_logos/Saffronexch.png",
    "id": 211
  },
  {
    "name": "SAIBABA9.COM",
    "url": "http://saibaba9.com/",
    "orig_share": 13.5,
    "share": 16,
    "logo": "assets/logo.png",
    "id": 212
  },
  {
    "name": "SAPPHIREEXCH9.COM",
    "url": "http://sapphireexch9.com/",
    "orig_share": 9.0,
    "share": 12,
    "logo": "assets/logo.png",
    "id": 213
  },
  {
    "name": "SILVER247X.COM",
    "url": "http://silver247x.com/",
    "orig_share": 10.0,
    "share": 13,
    "logo": "assets/brand_logos/Silverbook247.cm.png",
    "id": 214
  },
  {
    "name": "SILVERBET777.CLUB",
    "url": "http://silverbet777.club/",
    "orig_share": 17.5,
    "share": 20,
    "logo": "assets/brand_logos/Silverexch.png",
    "id": 215
  },
  {
    "name": "SILVERBHAI.COM",
    "url": "http://silverbhai.com/",
    "orig_share": 16.5,
    "share": 19,
    "logo": "assets/brand_logos/Silverexch.png",
    "id": 216
  },
  {
    "name": "SILVERBOOK247.COM",
    "url": "http://silverbook247.com/",
    "orig_share": 16.5,
    "share": 19,
    "logo": "assets/brand_logos/Silverbook247.cm.png",
    "id": 217
  },
  {
    "name": "SILVERBOOK99.COM",
    "url": "http://silverbook99.com/",
    "orig_share": 13.0,
    "share": 16,
    "logo": "assets/brand_logos/Silverbook247.cm.png",
    "id": 218
  },
  {
    "name": "SILVEREXCH.COM",
    "url": "http://silverexch.com/",
    "orig_share": 16.5,
    "share": 19,
    "logo": "assets/brand_logos/Silverexch.png",
    "id": 219
  },
  {
    "name": "SILVEREXCH247.COM",
    "url": "http://silverexch247.com/",
    "orig_share": 11.0,
    "share": 14,
    "logo": "assets/brand_logos/Silverexch.png",
    "id": 220
  },
  {
    "name": "SILVEREXCH9.CO",
    "url": "http://silverexch9.co/",
    "orig_share": 9.0,
    "share": 12,
    "logo": "assets/brand_logos/Silverexch.png",
    "id": 221
  },
  {
    "name": "SKY2027.COM",
    "url": "http://sky2027.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/Sky24x7.co.png",
    "id": 222
  },
  {
    "name": "SKY24X7.CO",
    "url": "http://sky24x7.co/",
    "orig_share": 7.0,
    "share": 10,
    "logo": "assets/brand_logos/Sky24x7.co.png",
    "id": 223
  },
  {
    "name": "SKYEXCH.VIP",
    "url": "http://skyexch.vip/",
    "orig_share": 19.0,
    "share": 22,
    "logo": "assets/brand_logos/SKYEXCHANGE247.com.png",
    "id": 224
  },
  {
    "name": "SKYEXCH247.ONLINE",
    "url": "http://skyexch247.online/",
    "orig_share": 18.5,
    "share": 21,
    "logo": "assets/brand_logos/SKYEXCHANGE247.com.png",
    "id": 225
  },
  {
    "name": "SKYEXCHX.COM",
    "url": "http://skyexchx.com/",
    "orig_share": 10.0,
    "share": 13,
    "logo": "assets/brand_logos/SKYEXCHANGE247.com.png",
    "id": 226
  },
  {
    "name": "SKYFAIR.VIP HKD",
    "url": "http://www.skyfair.vip/",
    "orig_share": 18.0,
    "share": 21,
    "logo": "assets/brand_logos/SKYEXCHANGE247.com.png",
    "id": 227
  },
  {
    "name": "SPINPLAY99.COM",
    "url": "http://spinplay99.com/",
    "orig_share": 18.0,
    "share": 21,
    "logo": "assets/brand_logos/spinplay99.png",
    "id": 228
  },
  {
    "name": "SUNEXCH.COM",
    "url": "http://sunexch.com/",
    "orig_share": 14.0,
    "share": 17,
    "logo": "assets/logo.png",
    "id": 229
  },
  {
    "name": "T10EXCHANGE.COM",
    "url": "http://t10exchange.com/",
    "orig_share": 6.5,
    "share": 9,
    "logo": "assets/brand_logos/T10EXCH.png",
    "id": 230
  },
  {
    "name": "TAJ777.NOW",
    "url": "http://taj777.now/",
    "orig_share": 19.0,
    "share": 22,
    "logo": "assets/logo.png",
    "id": 231
  },
  {
    "name": "TARGET666.COM",
    "url": "http://target666.com/",
    "orig_share": 14.0,
    "share": 17,
    "logo": "assets/logo.png",
    "id": 232
  },
  {
    "name": "TENEXCH.COM",
    "url": "http://tenexch.com/",
    "orig_share": 20.5,
    "share": 23,
    "logo": "assets/brand_logos/Tenexch.com.png",
    "id": 233
  },
  {
    "name": "TESLAEXCH.COM",
    "url": "http://teslaexch.com/",
    "orig_share": 10.0,
    "share": 13,
    "logo": "assets/logo.png",
    "id": 234
  },
  {
    "name": "THE100EXCH.COM",
    "url": "https://the100.app/",
    "orig_share": 12.0,
    "share": 15,
    "logo": "assets/brand_logos/the100exch.png",
    "id": 235
  },
  {
    "name": "THELOTUSBOOK.COM",
    "url": "http://thelotusbook.com/",
    "orig_share": 14.0,
    "share": 17,
    "logo": "assets/brand_logos/lotus2026.com (1).png",
    "id": 236
  },
  {
    "name": "TIGER2026.COM",
    "url": "http://tiger2026.com/",
    "orig_share": 14.0,
    "share": 17,
    "logo": "assets/brand_logos/TigerALL.png",
    "id": 237
  },
  {
    "name": "TIGER365.PRO",
    "url": "http://tiger365.pro/",
    "orig_share": 14.0,
    "share": 17,
    "logo": "assets/brand_logos/TigerALL.png",
    "id": 238
  },
  {
    "name": "TIGER399.COM",
    "url": "http://tiger399.com/",
    "orig_share": 13.0,
    "share": 16,
    "logo": "assets/brand_logos/TigerALL.png",
    "id": 239
  },
  {
    "name": "TURBO111.COM",
    "url": "http://turbo111.com/",
    "orig_share": 7.0,
    "share": 10,
    "logo": "assets/brand_logos/TURBO111.png",
    "id": 240
  },
  {
    "name": "TURBOEXCH.COM",
    "url": "http://turboexch.com/",
    "orig_share": 10.0,
    "share": 13,
    "logo": "assets/brand_logos/TURBO.gif",
    "id": 241
  },
  {
    "name": "ULT.GOX99.COM",
    "url": "http://ult.gox99.com/",
    "orig_share": 13.0,
    "share": 16,
    "logo": "assets/brand_logos/goexch9.png",
    "id": 242
  },
  {
    "name": "VICTORYEXCH.CLUB",
    "url": "http://victoryexch.club/",
    "orig_share": 13.0,
    "share": 16,
    "logo": "assets/logo.png",
    "id": 243
  },
  {
    "name": "VIPBHAI247.COM",
    "url": "http://vipbhai247.com/",
    "orig_share": 20.0,
    "share": 23,
    "logo": "assets/brand_logos/betbhai.blue.png",
    "id": 244
  },
  {
    "name": "VIPBOOK7.COM",
    "url": "http://vipbook7.com/",
    "orig_share": 17.0,
    "share": 20,
    "logo": "assets/brand_logos/vipbook999.png",
    "id": 245
  },
  {
    "name": "VIPBOOK99.COM",
    "url": "http://vipbook99.com/",
    "orig_share": 15.0,
    "share": 18,
    "logo": "assets/brand_logos/vipbook999.png",
    "id": 246
  },
  {
    "name": "VIPBOOK999.COM",
    "url": "http://vipbook999.com/",
    "orig_share": 17.0,
    "share": 20,
    "logo": "assets/brand_logos/vipbook999.png",
    "id": 247
  },
  {
    "name": "VIPCRIC247.COM",
    "url": "http://vipcric247.com/",
    "orig_share": 20.0,
    "share": 23,
    "logo": "assets/brand_logos/CRICKPLAY.png",
    "id": 248
  },
  {
    "name": "VIPCRICK247.COM",
    "url": "http://vipcrick247.com/",
    "orig_share": 20.0,
    "share": 23,
    "logo": "assets/brand_logos/CRICKPLAY.png",
    "id": 249
  },
  {
    "name": "VIPEXCH.COM",
    "url": "http://vipexch.com/",
    "orig_share": 15.0,
    "share": 18,
    "logo": "assets/brand_logos/vipexchange.png",
    "id": 250
  },
  {
    "name": "VIPEXCH365.COM",
    "url": "http://vipexch365.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/vipexchange.png",
    "id": 251
  },
  {
    "name": "VIPEXCH9.COM",
    "url": "http://vipexch9.com/",
    "orig_share": 18.5,
    "share": 21,
    "logo": "assets/brand_logos/vipexchange.png",
    "id": 252
  },
  {
    "name": "VIPLASER247.COM",
    "url": "http://viplaser247.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/mylaser247.info.png",
    "id": 253
  },
  {
    "name": "VIPPLAY9.COM",
    "url": "http://vipplay9.com/",
    "orig_share": 7.0,
    "share": 10,
    "logo": "assets/brand_logos/VIPPLAY.png",
    "id": 254
  },
  {
    "name": "VIRATEXCH365.COM",
    "url": "http://viratexch365.com/",
    "orig_share": 12.0,
    "share": 15,
    "logo": "assets/brand_logos/viratexch365.com.png",
    "id": 255
  },
  {
    "name": "WICKET20.COM",
    "url": "http://wicket20.com/",
    "orig_share": 5.5,
    "share": 8,
    "logo": "assets/brand_logos/20WIC.png",
    "id": 256
  },
  {
    "name": "WINBUZZ2026.COM",
    "url": "http://winbuzz2026.com/",
    "orig_share": 14.0,
    "share": 17,
    "logo": "assets/brand_logos/WINBUZZEXCH.jpg",
    "id": 257
  },
  {
    "name": "WINBUZZ345.COM",
    "url": "http://winbuzz345.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/WINBUZZEXCH.jpg",
    "id": 258
  },
  {
    "name": "WINBUZZEXCH.COM",
    "url": "http://winbuzzexch.com/",
    "orig_share": 10.0,
    "share": 13,
    "logo": "assets/brand_logos/WINBUZZEXCH.jpg",
    "id": 259
  },
  {
    "name": "WINEXCH99.COM",
    "url": "http://winexch99.com/",
    "orig_share": 9.0,
    "share": 12,
    "logo": "assets/brand_logos/WINEXCH.png",
    "id": 260
  },
  {
    "name": "WORLD2027.COM",
    "url": "http://world2027.com/",
    "orig_share": 16.0,
    "share": 19,
    "logo": "assets/brand_logos/WORLD7777.png",
    "id": 261
  },
  {
    "name": "WORLD777.COM",
    "url": "http://world777.now/",
    "orig_share": 23.0,
    "share": 26,
    "logo": "assets/brand_logos/WORLD7777.png",
    "id": 262
  },
  {
    "name": "WORLD999.IO",
    "url": "http://world999.io/",
    "orig_share": 10.0,
    "share": 13,
    "logo": "assets/brand_logos/WORLD7777.png",
    "id": 263
  },
  {
    "name": "WORLDEXCH9.COM",
    "url": "http://worldexch9.com/",
    "orig_share": 7.0,
    "share": 10,
    "logo": "assets/brand_logos/WORLD7777.png",
    "id": 264
  },
  {
    "name": "ZPLAY2.COM",
    "url": "http://zplay2.com/",
    "orig_share": 13.0,
    "share": 16,
    "logo": "assets/logo.png",
    "id": 265
  },
  {
    "name": "LOTUSPLAYS365.COM (AGENT)",
    "url": "https://ag.lotusplays365.com",
    "share": 19,
    "logo": "assets/brand_logos/lotusplays365.png",
    "isVip": true,
    "vipType": "VIP Agent Access",
    "id": 266
  },
  {
    "name": "SPORTPLAY99.WIN (ADMIN)",
    "url": "https://admin.sportplay99.win",
    "share": 19,
    "logo": "assets/brand_logos/sportplay99.png",
    "isVip": true,
    "vipType": "VIP Admin Access",
    "id": 267
  }
];

function getBrandLogo(nameOrUrl) {
  if (!nameOrUrl) return "assets/logo.png";
  const clean = String(nameOrUrl).toLowerCase().trim().replace(/[^a-z0-9]/g, '');
  const found = DEFAULT_SITES.find(s => {
    const sName = s.name.toLowerCase().replace(/[^a-z0-9]/g, '');
    const sUrl = s.url.toLowerCase().replace(/^https?:\/\//, '').replace(/\/.*$/, '').replace(/[^a-z0-9]/g, '');
    return clean.includes(sName) || sName.includes(clean) || clean.includes(sUrl) || sUrl.includes(clean);
  });
  return found && found.logo ? found.logo : "assets/logo.png";
}

function getSites() {
  return typeof DEFAULT_SITES !== "undefined" ? DEFAULT_SITES : [];
}

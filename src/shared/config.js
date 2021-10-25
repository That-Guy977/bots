const botData = {
  "ids": {
    "users": {
      "main": "628241756235890708",
      "jphelp": "786909743649390602",
      "jptest": "803139094480814110",
      "omega": "855711160393662464",

      "dyno": "155149108183695360",
      "sigma": "216437513709944832",
      "mee6": "159985870458322944",
      "rroles": "550613223733329920",
      "kotoba": "251239170058616833",
      "sora": "750260711460175894"
    },
    "guilds": {
      "jp101": "778426035141869620",
      "pain": "847136199436009502"
    },
    "channels": {
      "jp101": {
        "announcements": "779953766341410847",
        "rules": "778430643901825044",
        "mod-logs": "805444415443173376",
        "file-logs": "808218683288584232",
        "role-logs": "805443587574988810",
        "mod-test": "779380025299959829",
        "nihongo-center": "778965985360609290",
        "q-a": "778855628725813258",
        "wotd-n4": "787856481209810994",
        "wotd-n3": "787857267310985236",
        "wotd-n2": "787857545975955466"
      },
      "pain": {
        "general": "847292548589289513"
      }
    },
    "roles": {
      "jp101": {
        "mod": "778434956891783170",
        "contributor": "813758503113457675",
        "bots": "778961297987207208",
        "trusted": "801679146060742676"
      },
      "pain": {
        "god": "855710404117397524",
        "member": "855150270467538954",
        "bot": "855146634118430720"
      }
    }
  },
  "data": {
    "jphelp": {
      "guild": "jp101",
      "channel": "mod-test",
      "admin": "mod",
      "logs": "mod-logs"
    },
    "jptest": {
      "guild": "jp101",
      "channel": "mod-test",
      "admin": "mod",
      "alternate": "jphelp",
      "logs": "mod-logs"
    },
    "omega": {
      "guild": "pain",
      "channel": "general",
      "admin": "god"
    }
  },
  "color": {
    "nitro": "ff73fa",

    "jphelp": "0095df",
    "jptest": "0095df",
    "omega": "0095df",

    "dyno": "2470c4",
    "sigma": "153930",
    "mee6": "60ccf7",
    "rroles": "cc3e87",
    "kotoba": "a3817d",
    "sora": "e7d5d4"
  }
}
const cmdData = {
  "prefix": {
    "jphelp": "h!",
    "jptest": "t!",
    "omega": "o!"
  },
  "nc-manage-exempt": [
    "q-a",
    "wotd-n4",
    "wotd-n3",
    "wotd-n2"
  ]
}
const evtData = {
  "botPresence": {
    "jp101": [true, null, [
      "dyno",
      "sigma",
      "mee6",
      "rroles",
      "kotoba",
      "sora"
    ]],
    "pain": [false, "RED", [
      "jphelp",
      "jptest"
    ]]
  },
  "autoRole": {
    "jp101": [null, "bots", "role-logs"],
    "pain": ["member", "bot", null]
  }
}

export { botData, cmdData, evtData }

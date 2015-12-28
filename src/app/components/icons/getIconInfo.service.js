(function () {
    'use strict';
    var paths = {
        championIcon: 'img/champions/icons/',
        summonerSpell: 'img/summoner-spells/',
        itemIcon: 'img/items/icons/'
    };

    angular
        .module('app.icons')
        .factory('GetIconInfo', GetIconInfo);


    function GetIconInfo() {

        var icons = {
            champion: getChampionIcons(),
            summoner: getSummonerIcons(),
            item: getItemIcons()
        };

        return {
            champion: function (id) {
                return icons.champion[id.toString()];
            },
            summoner: function (id) {
                return icons.summoner[id.toString()];
            },
            item: function (id) {
                return icons.item[id.toString()];
            }
        }

    }

    function getSummonerIcons() {
        return {
            "1": {
                "name": "Cleanse",
                "description": "Removes all disables and summoner spell debuffs affecting your champion and lowers the duration of incoming disables by 65% for 3 seconds.",
                "image": paths.summonerSpell + "SummonerBoost.png"
            },
            "2": {
                "name": "Clairvoyance",
                "description": "Reveals a small area of the map for your team for 5 seconds.",
                "image": paths.summonerSpell + "SummonerClairvoyance.png"
            },
            "3": {
                "name": "Exhaust",
                "description": "Exhausts target enemy champion, reducing their Movement Speed and Attack Speed by 30%, their Armor and Magic Resist by 10, and their damage dealt by 40% for 2.5 seconds.",
                "image": paths.summonerSpell + "SummonerExhaust.png"
            },
            "4": {
                "name": "Flash",
                "description": "Teleports your champion a short distance toward your cursor's location.",
                "image": paths.summonerSpell + "SummonerFlash.png"
            },
            "6": {
                "name": "Ghost",
                "description": "Your champion can move through units and has 27% increased Movement Speed for 10 seconds",
                "image": paths.summonerSpell + "SummonerHaste.png"
            },
            "7": {
                "name": "Heal",
                "description": "Restores 90-345 Health (depending on champion level) and grants 30% Movement Speed for 1 second to you and target allied champion. This healing is halved for units recently affected by Summoner Heal.",
                "image": paths.summonerSpell + "SummonerHeal.png"
            },
            "11": {
                "name": "Smite",
                "description": "Deals 390-1000 true damage (depending on champion level) to target epic or large monster or enemy minion.",
                "image": paths.summonerSpell + "SummonerSmite.png"
            },
            "12": {
                "name": "Teleport",
                "description": "After channeling for 3.5 seconds, teleports your champion to target allied structure, minion, or ward.",
                "image": paths.summonerSpell + "SummonerTeleport.png"
            },
            "13": {
                "name": "Clarity",
                "description": "Restores 40% of your champion's maximum Mana. Also restores allies for 40% of their maximum Mana",
                "image": paths.summonerSpell + "SummonerMana.png"
            },
            "14": {
                "name": "Ignite",
                "description": "Ignites target enemy champion, dealing 70-410 true damage (depending on champion level) over 5 seconds, grants you vision of the target, and reduces healing effects on them for the duration.",
                "image": paths.summonerSpell + "SummonerDot.png"
            },
            "17": {
                "name": "Garrison",
                "description": "Allied Turret: Grants massive regeneration for 8 seconds. Enemy Turret: Reduces damage dealt by 80% for 8 seconds.",
                "image": paths.summonerSpell + "SummonerOdinGarrison.png"
            },
            "21": {
                "name": "Barrier",
                "description": "Shields your champion for 115-455 (depending on champion level) for 2 seconds.",
                "image": paths.summonerSpell + "SummonerBarrier.png"
            },
            "30": {
                "name": "To the King!",
                "description": "Quickly travel to the Poro King's side.",
                "image": paths.summonerSpell + "SummonerPoroRecall.png"
            },
            "31": {
                "name": "Poro Toss",
                "description": "Toss a Poro at your enemies. If it hits, you can quickly travel to your target as a follow up.",
                "image": paths.summonerSpell + "SummonerPoroThrow.png"
            },
            "32": {
                "name": "Mark",
                "description": "Throw a snowball in a straight line at your enemies. If it hits an enemy, they become marked and your champion can quickly travel to the marked target as a follow up.",
                "image": paths.summonerSpell + "SummonerSnowball.png"
            }
        }
    }

    function getChampionIcons() {
        return {

            '1': {
                name: 'Annie',
                title: 'the Dark Child',
                id: 1,
                image: paths.championIcon + 'Annie.png'
            },
            '2': {
                name: 'Olaf',
                title: 'the Berserker',
                id: 2,
                image: paths.championIcon + 'Olaf.png'
            },
            '3': {
                name: 'Galio',
                title: 'the Sentinel\'s Sorrow',
                id: 3,
                image: paths.championIcon + 'Galio.png'
            },
            '4': {
                name: 'Twisted Fate',
                title: 'the Card Master',
                id: 4,
                image: paths.championIcon + 'TwistedFate.png'
            },
            '5': {
                name: 'Xin Zhao',
                title: 'the Seneschal of Demacia',
                id: 5,
                image: paths.championIcon + 'XinZhao.png'
            },
            '6': {
                name: 'Urgot',
                title: 'the Headsman\'s Pride',
                id: 6,
                image: paths.championIcon + 'Urgot.png'
            },
            '7': {
                name: 'LeBlanc',
                title: 'the Deceiver',
                id: 7,
                image: paths.championIcon + 'Leblanc.png'
            },
            '8': {
                name: 'Vladimir',
                title: 'the Crimson Reaper',
                id: 8,
                image: paths.championIcon + 'Vladimir.png'
            },
            '9': {
                name: 'Fiddlesticks',
                title: 'the Harbinger of Doom',
                id: 9,
                image: paths.championIcon + 'FiddleSticks.png'
            },
            '10': {
                name: 'Kayle',
                title: 'The Judicator',
                id: 10,
                image: paths.championIcon + 'Kayle.png'
            },
            '11': {
                name: 'Master Yi',
                title: 'the Wuju Bladesman',
                id: 11,
                image: paths.championIcon + 'MasterYi.png'
            },
            '12': {
                name: 'Alistar',
                title: 'the Minotaur',
                id: 12,
                image: paths.championIcon + 'Alistar.png'
            },
            '13': {
                name: 'Ryze',
                title: 'the Rogue Mage',
                id: 13,
                image: paths.championIcon + 'Ryze.png'
            },
            '14': {
                name: 'Sion',
                title: 'The Undead Juggernaut',
                id: 14,
                image: paths.championIcon + 'Sion.png'
            },
            '15': {
                name: 'Sivir',
                title: 'the Battle Mistress',
                id: 15,
                image: paths.championIcon + 'Sivir.png'
            },
            '16': {
                name: 'Soraka',
                title: 'the Starchild',
                id: 16,
                image: paths.championIcon + 'Soraka.png'
            },
            '17': {
                name: 'Teemo',
                title: 'the Swift Scout',
                id: 17,
                image: paths.championIcon + 'Teemo.png'
            },
            '18': {
                name: 'Tristana',
                title: 'the Yordle Gunner',
                id: 18,
                image: paths.championIcon + 'Tristana.png'
            },
            '19': {
                name: 'Warwick',
                title: 'the Blood Hunter',
                id: 19,
                image: paths.championIcon + 'Warwick.png'
            },
            '20': {
                name: 'Nunu',
                title: 'the Yeti Rider',
                id: 20,
                image: paths.championIcon + 'Nunu.png'
            },
            '21': {
                name: 'Miss Fortune',
                title: 'the Bounty Hunter',
                id: 21,
                image: paths.championIcon + 'MissFortune.png'
            },
            '22': {
                name: 'Ashe',
                title: 'the Frost Archer',
                id: 22,
                image: paths.championIcon + 'Ashe.png'
            },
            '23': {
                name: 'Tryndamere',
                title: 'the Barbarian King',
                id: 23,
                image: paths.championIcon + 'Tryndamere.png'
            },
            '24': {
                name: 'Jax',
                title: 'Grandmaster at Arms',
                id: 24,
                image: paths.championIcon + 'Jax.png'
            },
            '25': {
                name: 'Morgana',
                title: 'Fallen Angel',
                id: 25,
                image: paths.championIcon + 'Morgana.png'
            },
            '26': {
                name: 'Zilean',
                title: 'the Chronokeeper',
                id: 26,
                image: paths.championIcon + 'Zilean.png'
            },
            '27': {
                name: 'Singed',
                title: 'the Mad Chemist',
                id: 27,
                image: paths.championIcon + 'Singed.png'
            },
            '28': {
                name: 'Evelynn',
                title: 'the Widowmaker',
                id: 28,
                image: paths.championIcon + 'Evelynn.png'
            },
            '29': {
                name: 'Twitch',
                title: 'the Plague Rat',
                id: 29,
                image: paths.championIcon + 'Twitch.png'
            },
            '30': {
                name: 'Karthus',
                title: 'the Deathsinger',
                id: 30,
                image: paths.championIcon + 'Karthus.png'
            },
            '31': {
                name: 'Cho\'Gath',
                title: 'the Terror of the Void',
                id: 31,
                image: paths.championIcon + 'Chogath.png'
            },
            '32': {
                name: 'Amumu',
                title: 'the Sad Mummy',
                id: 32,
                image: paths.championIcon + 'Amumu.png'
            },
            '33': {
                name: 'Rammus',
                title: 'the Armordillo',
                id: 33,
                image: paths.championIcon + 'Rammus.png'
            },
            '34': {
                name: 'Anivia',
                title: 'the Cryophoenix',
                id: 34,
                image: paths.championIcon + 'Anivia.png'
            },
            '35': {
                name: 'Shaco',
                title: 'the Demon Jester',
                id: 35,
                image: paths.championIcon + 'Shaco.png'
            },
            '36': {
                name: 'Dr. Mundo',
                title: 'the Madman of Zaun',
                id: 36,
                image: paths.championIcon + 'DrMundo.png'
            },
            '37': {
                name: 'Sona',
                title: 'Maven of the Strings',
                id: 37,
                image: paths.championIcon + 'Sona.png'
            },
            '38': {
                name: 'Kassadin',
                title: 'the Void Walker',
                id: 38,
                image: paths.championIcon + 'Kassadin.png'
            },
            '39': {
                name: 'Irelia',
                title: 'the Will of the Blades',
                id: 39,
                image: paths.championIcon + 'Irelia.png'
            },
            '40': {
                name: 'Janna',
                title: 'the Storm\'s Fury',
                id: 40,
                image: paths.championIcon + 'Janna.png'
            },
            '41': {
                name: 'Gangplank',
                title: 'the Saltwater Scourge',
                id: 41,
                image: paths.championIcon + 'Gangplank.png'
            },
            '42': {
                name: 'Corki',
                title: 'the Daring Bombardier',
                id: 42,
                image: paths.championIcon + 'Corki.png'
            },
            '43': {
                name: 'Karma',
                title: 'the Enlightened One',
                id: 43,
                image: paths.championIcon + 'Karma.png'
            },
            '44': {
                name: 'Taric',
                title: 'the Gem Knight',
                id: 44,
                image: paths.championIcon + 'Taric.png'
            },
            '45': {
                name: 'Veigar',
                title: 'the Tiny Master of Evil',
                id: 45,
                image: paths.championIcon + 'Veigar.png'
            },
            '48': {
                name: 'Trundle',
                title: 'the Troll King',
                id: 48,
                image: paths.championIcon + 'Trundle.png'
            },
            '50': {
                name: 'Swain',
                title: 'the Master Tactician',
                id: 50,
                image: paths.championIcon + 'Swain.png'
            },
            '51': {
                name: 'Caitlyn',
                title: 'the Sheriff of Piltover',
                id: 51,
                image: paths.championIcon + 'Caitlyn.png'
            },
            '53': {
                name: 'Blitzcrank',
                title: 'the Great Steam Golem',
                id: 53,
                image: paths.championIcon + 'Blitzcrank.png'
            },
            '54': {
                name: 'Malphite',
                title: 'Shard of the Monolith',
                id: 54,
                image: paths.championIcon + 'Malphite.png'
            },
            '55': {
                name: 'Katarina',
                title: 'the Sinister Blade',
                id: 55,
                image: paths.championIcon + 'Katarina.png'
            },
            '56': {
                name: 'Nocturne',
                title: 'the Eternal Nightmare',
                id: 56,
                image: paths.championIcon + 'Nocturne.png'
            },
            '57': {
                name: 'Maokai',
                title: 'the Twisted Treant',
                id: 57,
                image: paths.championIcon + 'Maokai.png'
            },
            '58': {
                name: 'Renekton',
                title: 'the Butcher of the Sands',
                id: 58,
                image: paths.championIcon + 'Renekton.png'
            },
            '59': {
                name: 'Jarvan IV',
                title: 'the Exemplar of Demacia',
                id: 59,
                image: paths.championIcon + 'JarvanIV.png'
            },
            '60': {
                name: 'Elise',
                title: 'the Spider Queen',
                id: 60,
                image: paths.championIcon + 'Elise.png'
            },
            '61': {
                name: 'Orianna',
                title: 'the Lady of Clockwork',
                id: 61,
                image: paths.championIcon + 'Orianna.png'
            },
            '62': {
                name: 'Wukong',
                title: 'the Monkey King',
                id: 62,
                image: paths.championIcon + 'MonkeyKing.png'
            },
            '63': {
                name: 'Brand',
                title: 'the Burning Vengeance',
                id: 63,
                image: paths.championIcon + 'Brand.png'
            },
            '64': {
                name: 'Lee Sin',
                title: 'the Blind Monk',
                id: 64,
                image: paths.championIcon + 'LeeSin.png'
            },
            '67': {
                name: 'Vayne',
                title: 'the Night Hunter',
                id: 67,
                image: paths.championIcon + 'Vayne.png'
            },
            '68': {
                name: 'Rumble',
                title: 'the Mechanized Menace',
                id: 68,
                image: paths.championIcon + 'Rumble.png'
            },
            '69': {
                name: 'Cassiopeia',
                title: 'the Serpent\'s Embrace',
                id: 69,
                image: paths.championIcon + 'Cassiopeia.png'
            },
            '72': {
                name: 'Skarner',
                title: 'the Crystal Vanguard',
                id: 72,
                image: paths.championIcon + 'Skarner.png'
            },
            '74': {
                name: 'Heimerdinger',
                title: 'the Revered Inventor',
                id: 74,
                image: paths.championIcon + 'Heimerdinger.png'
            },
            '75': {
                name: 'Nasus',
                title: 'the Curator of the Sands',
                id: 75,
                image: paths.championIcon + 'Nasus.png'
            },
            '76': {
                name: 'Nidalee',
                title: 'the Bestial Huntress',
                id: 76,
                image: paths.championIcon + 'Nidalee.png'
            },
            '77': {
                name: 'Udyr',
                title: 'the Spirit Walker',
                id: 77,
                image: paths.championIcon + 'Udyr.png'
            },
            '78': {
                name: 'Poppy',
                title: 'Keeper of the Hammer',
                id: 78,
                image: paths.championIcon + 'Poppy.png'
            },
            '79': {
                name: 'Gragas',
                title: 'the Rabble Rouser',
                id: 79,
                image: paths.championIcon + 'Gragas.png'
            },
            '80': {
                name: 'Pantheon',
                title: 'the Artisan of War',
                id: 80,
                image: paths.championIcon + 'Pantheon.png'
            },
            '81': {
                name: 'Ezreal',
                title: 'the Prodigal Explorer',
                id: 81,
                image: paths.championIcon + 'Ezreal.png'
            },
            '82': {
                name: 'Mordekaiser',
                title: 'the Iron Revenant',
                id: 82,
                image: paths.championIcon + 'Mordekaiser.png'
            },
            '83': {
                name: 'Yorick',
                title: 'the Gravedigger',
                id: 83,
                image: paths.championIcon + 'Yorick.png'
            },
            '84': {
                name: 'Akali',
                title: 'the Fist of Shadow',
                id: 84,
                image: paths.championIcon + 'Akali.png'
            },
            '85': {
                name: 'Kennen',
                title: 'the Heart of the Tempest',
                id: 85,
                image: paths.championIcon + 'Kennen.png'
            },
            '86': {
                name: 'Garen',
                title: 'The Might of Demacia',
                id: 86,
                image: paths.championIcon + 'Garen.png'
            },
            '89': {
                name: 'Leona',
                title: 'the Radiant Dawn',
                id: 89,
                image: paths.championIcon + 'Leona.png'
            },
            '90': {
                name: 'Malzahar',
                title: 'the Prophet of the Void',
                id: 90,
                image: paths.championIcon + 'Malzahar.png'
            },
            '91': {
                name: 'Talon',
                title: 'the Blade\'s Shadow',
                id: 91,
                image: paths.championIcon + 'Talon.png'
            },
            '92': {
                name: 'Riven',
                title: 'the Exile',
                id: 92,
                image: paths.championIcon + 'Riven.png'
            },
            '96': {
                name: 'Kog\'Maw',
                title: 'the Mouth of the Abyss',
                id: 96,
                image: paths.championIcon + 'KogMaw.png'
            },
            '98': {
                name: 'Shen',
                title: 'Eye of Twilight',
                id: 98,
                image: paths.championIcon + 'Shen.png'
            },
            '99': {
                name: 'Lux',
                title: 'the Lady of Luminosity',
                id: 99,
                image: paths.championIcon + 'Lux.png'
            },
            '101': {
                name: 'Xerath',
                title: 'the Magus Ascendant',
                id: 101,
                image: paths.championIcon + 'Xerath.png'
            },
            '102': {
                name: 'Shyvana',
                title: 'the Half-Dragon',
                id: 102,
                image: paths.championIcon + 'Shyvana.png'
            },
            '103': {
                name: 'Ahri',
                title: 'the Nine-Tailed Fox',
                id: 103,
                image: paths.championIcon + 'Ahri.png'
            },
            '104': {
                name: 'Graves',
                title: 'the Outlaw',
                id: 104,
                image: paths.championIcon + 'Graves.png'
            },
            '105': {
                name: 'Fizz',
                title: 'the Tidal Trickster',
                id: 105,
                image: paths.championIcon + 'Fizz.png'
            },
            '106': {
                name: 'Volibear',
                title: 'the Thunder\'s Roar',
                id: 106,
                image: paths.championIcon + 'Volibear.png'
            },
            '107': {
                name: 'Rengar',
                title: 'the Pridestalker',
                id: 107,
                image: paths.championIcon + 'Rengar.png'
            },
            '110': {
                name: 'Varus',
                title: 'the Arrow of Retribution',
                id: 110,
                image: paths.championIcon + 'Varus.png'
            },
            '111': {
                name: 'Nautilus',
                title: 'the Titan of the Depths',
                id: 111,
                image: paths.championIcon + 'Nautilus.png'
            },
            '112': {
                name: 'Viktor',
                title: 'the Machine Herald',
                id: 112,
                image: paths.championIcon + 'Viktor.png'
            },
            '113': {
                name: 'Sejuani',
                title: 'the Winter\'s Wrath',
                id: 113,
                image: paths.championIcon + 'Sejuani.png'
            },
            '114': {
                name: 'Fiora',
                title: 'the Grand Duelist',
                id: 114,
                image: paths.championIcon + 'Fiora.png'
            },
            '115': {
                name: 'Ziggs',
                title: 'the Hexplosives Expert',
                id: 115,
                image: paths.championIcon + 'Ziggs.png'
            },
            '117': {
                name: 'Lulu',
                title: 'the Fae Sorceress',
                id: 117,
                image: paths.championIcon + 'Lulu.png'
            },
            '119': {
                name: 'Draven',
                title: 'the Glorious Executioner',
                id: 119,
                image: paths.championIcon + 'Draven.png'
            },
            '120': {
                name: 'Hecarim',
                title: 'the Shadow of War',
                id: 120,
                image: paths.championIcon + 'Hecarim.png'
            },
            '121': {
                name: 'Kha\'Zix',
                title: 'the Voidreaver',
                id: 121,
                image: paths.championIcon + 'Khazix.png'
            },
            '122': {
                name: 'Darius',
                title: 'the Hand of Noxus',
                id: 122,
                image: paths.championIcon + 'Darius.png'
            },
            '126': {
                name: 'Jayce',
                title: 'the Defender of Tomorrow',
                id: 126,
                image: paths.championIcon + 'Jayce.png'
            },
            '127': {
                name: 'Lissandra',
                title: 'the Ice Witch',
                id: 127,
                image: paths.championIcon + 'Lissandra.png'
            },
            '131': {
                name: 'Diana',
                title: 'Scorn of the Moon',
                id: 131,
                image: paths.championIcon + 'Diana.png'
            },
            '133': {
                name: 'Quinn',
                title: 'Demacia\'s Wings',
                id: 133,
                image: paths.championIcon + 'Quinn.png'
            },
            '134': {
                name: 'Syndra',
                title: 'the Dark Sovereign',
                id: 134,
                image: paths.championIcon + 'Syndra.png'
            },
            '143': {
                name: 'Zyra',
                title: 'Rise of the Thorns',
                id: 143,
                image: paths.championIcon + 'Zyra.png'
            },
            '150': {
                name: 'Gnar',
                title: 'the Missing Link',
                id: 150,
                image: paths.championIcon + 'Gnar.png'
            },
            '154': {
                name: 'Zac',
                title: 'the Secret Weapon',
                id: 154,
                image: paths.championIcon + 'Zac.png'
            },
            '157': {
                name: 'Yasuo',
                title: 'the Unforgiven',
                id: 157,
                image: paths.championIcon + 'Yasuo.png'
            },
            '161': {
                name: 'Vel\'Koz',
                title: 'the Eye of the Void',
                id: 161,
                image: paths.championIcon + 'Velkoz.png'
            },
            '201': {
                name: 'Braum',
                title: 'the Heart of the Freljord',
                id: 201,
                image: paths.championIcon + 'Braum.png'
            },
            '203': {
                name: 'Kindred',
                title: 'The Eternal Hunters',
                id: 203,
                image: paths.championIcon + 'Kindred.png'
            },
            '222': {
                name: 'Jinx',
                title: 'the Loose Cannon',
                id: 222,
                image: paths.championIcon + 'Jinx.png'
            },
            '223': {
                name: 'Tahm Kench',
                title: 'the River King',
                id: 223,
                image: paths.championIcon + 'TahmKench.png'
            },
            '236': {
                name: 'Lucian',
                title: 'the Purifier',
                id: 236,
                image: paths.championIcon + 'Lucian.png'
            },
            '238': {
                name: 'Zed',
                title: 'the Master of Shadows',
                id: 238,
                image: paths.championIcon + 'Zed.png'
            },
            '245': {
                name: 'Ekko',
                title: 'the Boy Who Shattered Time',
                id: 245,
                image: paths.championIcon + 'Ekko.png'
            },
            '254': {
                name: 'Vi',
                title: 'the Piltover Enforcer',
                id: 254,
                image: paths.championIcon + 'Vi.png'
            },
            '266': {
                name: 'Aatrox',
                title: 'the Darkin Blade',
                id: 266,
                image: paths.championIcon + 'Aatrox.png'
            },
            '267': {
                name: 'Nami',
                title: 'the Tidecaller',
                id: 267,
                image: paths.championIcon + 'Nami.png'
            },
            '268': {
                name: 'Azir',
                title: 'the Emperor of the Sands',
                id: 268,
                image: paths.championIcon + 'Azir.png'
            },
            '412': {
                name: 'Thresh',
                title: 'the Chain Warden',
                id: 412,
                image: paths.championIcon + 'Thresh.png'
            },
            '420': {
                name: 'Illaoi',
                title: 'the Kraken Priestess',
                id: 420,
                image: paths.championIcon + 'Illaoi.png'
            },
            '421': {
                name: 'Rek\'Sai',
                title: 'the Void Burrower',
                id: 421,
                image: paths.championIcon + 'RekSai.png'
            },
            '429': {
                name: 'Kalista',
                title: 'the Spear of Vengeance',
                id: 429,
                image: paths.championIcon + 'Kalista.png'
            },
            '432': {
                name: 'Bard',
                title: 'the Wandering Caretaker',
                id: 432,
                image: paths.championIcon + 'Bard.png'
            }
        }
    }

    function getItemIcons() {
        return {
            "1001": {"name": "Boots of Speed", "id": 1001, "image": paths.itemIcon + "1001.png"},
            "1004": {"name": "Faerie Charm", "id": 1004, "image": paths.itemIcon + "1004.png"},
            "1006": {"name": "Rejuvenation Bead", "id": 1006, "image": paths.itemIcon + "1006.png"},
            "1011": {"name": "Giant's Belt", "id": 1011, "image": paths.itemIcon + "1011.png"},
            "1018": {"name": "Cloak of Agility", "id": 1018, "image": paths.itemIcon + "1018.png"},
            "1026": {"name": "Blasting Wand", "id": 1026, "image": paths.itemIcon + "1026.png"},
            "1027": {"name": "Sapphire Crystal", "id": 1027, "image": paths.itemIcon + "1027.png"},
            "1028": {"name": "Ruby Crystal", "id": 1028, "image": paths.itemIcon + "1028.png"},
            "1029": {"name": "Cloth Armor", "id": 1029, "image": paths.itemIcon + "1029.png"},
            "1031": {"name": "Chain Vest", "id": 1031, "image": paths.itemIcon + "1031.png"},
            "1033": {"name": "Null-Magic Mantle", "id": 1033, "image": paths.itemIcon + "1033.png"},
            "1036": {"name": "Long Sword", "id": 1036, "image": paths.itemIcon + "1036.png"},
            "1037": {"name": "Pickaxe", "id": 1037, "image": paths.itemIcon + "1037.png"},
            "1038": {"name": "B. F. Sword", "id": 1038, "image": paths.itemIcon + "1038.png"},
            "1039": {"name": "Hunter's Talisman", "id": 1039, "image": paths.itemIcon + "1039.png"},
            "1041": {"name": "Hunter's Machete", "id": 1041, "image": paths.itemIcon + "1041.png"},
            "1042": {"name": "Dagger", "id": 1042, "image": paths.itemIcon + "1042.png"},
            "1043": {"name": "Recurve Bow", "id": 1043, "image": paths.itemIcon + "1043.png"},
            "1051": {"name": "Brawler's Gloves", "id": 1051, "image": paths.itemIcon + "1051.png"},
            "1052": {"name": "Amplifying Tome", "id": 1052, "image": paths.itemIcon + "1052.png"},
            "1053": {"name": "Vampiric Scepter", "id": 1053, "image": paths.itemIcon + "1053.png"},
            "1054": {"name": "Doran's Shield", "id": 1054, "image": paths.itemIcon + "1054.png"},
            "1055": {"name": "Doran's Blade", "id": 1055, "image": paths.itemIcon + "1055.png"},
            "1056": {"name": "Doran's Ring", "id": 1056, "image": paths.itemIcon + "1056.png"},
            "1057": {"name": "Negatron Cloak", "id": 1057, "image": paths.itemIcon + "1057.png"},
            "1058": {"name": "Needlessly Large Rod", "id": 1058, "image": paths.itemIcon + "1058.png"},
            "1062": {"name": "Prospector's Blade", "id": 1062, "image": paths.itemIcon + "1062.png"},
            "1063": {"name": "Prospector's Ring", "id": 1063, "image": paths.itemIcon + "1063.png"},
            "1082": {"name": "The Dark Seal", "id": 1082, "image": paths.itemIcon + "1082.png"},
            "1083": {"name": "Cull", "id": 1083, "image": paths.itemIcon + "1083.png"},
            "1300": {"name": "Enchantment: Furor", "id": 1300, "image": paths.itemIcon + "1300.png"},
            "1301": {"name": "Enchantment: Alacrity", "id": 1301, "image": paths.itemIcon + "1301.png"},
            "1302": {"name": "Enchantment: Captain", "id": 1302, "image": paths.itemIcon + "1302.png"},
            "1303": {"name": "Enchantment: Distortion", "id": 1303, "image": paths.itemIcon + "1303.png"},
            "1305": {"name": "Enchantment: Furor", "id": 1305, "image": paths.itemIcon + "1305.png"},
            "1306": {"name": "Enchantment: Alacrity", "id": 1306, "image": paths.itemIcon + "1306.png"},
            "1307": {"name": "Enchantment: Captain", "id": 1307, "image": paths.itemIcon + "1307.png"},
            "1308": {"name": "Enchantment: Distortion", "id": 1308, "image": paths.itemIcon + "1308.png"},
            "1310": {"name": "Enchantment: Furor", "id": 1310, "image": paths.itemIcon + "1310.png"},
            "1311": {"name": "Enchantment: Alacrity", "id": 1311, "image": paths.itemIcon + "1311.png"},
            "1312": {"name": "Enchantment: Captain", "id": 1312, "image": paths.itemIcon + "1312.png"},
            "1313": {"name": "Enchantment: Distortion", "id": 1313, "image": paths.itemIcon + "1313.png"},
            "1315": {"name": "Enchantment: Furor", "id": 1315, "image": paths.itemIcon + "1315.png"},
            "1316": {"name": "Enchantment: Alacrity", "id": 1316, "image": paths.itemIcon + "1316.png"},
            "1317": {"name": "Enchantment: Captain", "id": 1317, "image": paths.itemIcon + "1317.png"},
            "1318": {"name": "Enchantment: Distortion", "id": 1318, "image": paths.itemIcon + "1318.png"},
            "1320": {"name": "Enchantment: Furor", "id": 1320, "image": paths.itemIcon + "1320.png"},
            "1321": {"name": "Enchantment: Alacrity", "id": 1321, "image": paths.itemIcon + "1321.png"},
            "1322": {"name": "Enchantment: Captain", "id": 1322, "image": paths.itemIcon + "1322.png"},
            "1323": {"name": "Enchantment: Distortion", "id": 1323, "image": paths.itemIcon + "1323.png"},
            "1325": {"name": "Enchantment: Furor", "id": 1325, "image": paths.itemIcon + "1325.png"},
            "1326": {"name": "Enchantment: Alacrity", "id": 1326, "image": paths.itemIcon + "1326.png"},
            "1327": {"name": "Enchantment: Captain", "id": 1327, "image": paths.itemIcon + "1327.png"},
            "1328": {"name": "Enchantment: Distortion", "id": 1328, "image": paths.itemIcon + "1328.png"},
            "1330": {"name": "Enchantment: Furor", "id": 1330, "image": paths.itemIcon + "1330.png"},
            "1331": {"name": "Enchantment: Alacrity", "id": 1331, "image": paths.itemIcon + "1331.png"},
            "1332": {"name": "Enchantment: Captain", "id": 1332, "image": paths.itemIcon + "1332.png"},
            "1333": {"name": "Enchantment: Distortion", "id": 1333, "image": paths.itemIcon + "1333.png"},
            "1400": {"name": "Enchantment: Warrior", "id": 1400, "image": paths.itemIcon + "1400.png"},
            "1401": {"name": "Enchantment: Cinderhulk", "id": 1401, "image": paths.itemIcon + "1401.png"},
            "1402": {"name": "Enchantment: Runeglaive", "id": 1402, "image": paths.itemIcon + "1402.png"},
            "1403": {"name": "Enchantment: Devourer", "id": 1403, "image": paths.itemIcon + "1403.png"},
            "1408": {"name": "Enchantment: Warrior", "id": 1408, "image": paths.itemIcon + "1408.png"},
            "1409": {"name": "Enchantment: Cinderhulk", "id": 1409, "image": paths.itemIcon + "1409.png"},
            "1410": {"name": "Enchantment: Runeglaive", "id": 1410, "image": paths.itemIcon + "1410.png"},
            "1411": {"name": "Enchantment: Devourer", "id": 1411, "image": paths.itemIcon + "1411.png"},
            "1412": {"name": "Enchantment: Warrior", "id": 1412, "image": paths.itemIcon + "1412.png"},
            "1413": {"name": "Enchantment: Cinderhulk", "id": 1413, "image": paths.itemIcon + "1413.png"},
            "1414": {"name": "Enchantment: Runeglaive", "id": 1414, "image": paths.itemIcon + "1414.png"},
            "1415": {"name": "Enchantment: Devourer", "id": 1415, "image": paths.itemIcon + "1415.png"},
            "2003": {"name": "Health Potion", "id": 2003, "image": paths.itemIcon + "2003.png"},
            "2009": {"name": "Total Biscuit of Rejuvenation", "id": 2009, "image": paths.itemIcon + "2009.png"},
            "2010": {"name": "Total Biscuit of Rejuvenation", "id": 2010, "image": paths.itemIcon + "2010.png"},
            "2015": {"name": "Kircheis Shard", "id": 2015, "image": paths.itemIcon + "2015.png"},
            "2031": {"name": "Refillable Potion", "id": 2031, "image": paths.itemIcon + "2031.png"},
            "2032": {"name": "Hunter's Potion", "id": 2032, "image": paths.itemIcon + "2032.png"},
            "2033": {"name": "Corrupting Potion", "id": 2033, "image": paths.itemIcon + "2033.png"},
            "2043": {"name": "Vision Ward", "id": 2043, "image": paths.itemIcon + "2043.png"},
            "2045": {"name": "Ruby Sightstone", "id": 2045, "image": paths.itemIcon + "2045.png"},
            "2047": {"name": "Oracle's Extract", "id": 2047, "image": paths.itemIcon + "2047.png"},
            "2049": {"name": "Sightstone", "id": 2049, "image": paths.itemIcon + "2049.png"},
            "2050": {"name": "Explorer's Ward", "id": 2050, "image": paths.itemIcon + "2050.png"},
            "2051": {"name": "Guardian's Horn", "id": 2051, "image": paths.itemIcon + "2051.png"},
            "2052": {"name": "Poro-Snax", "id": 2052, "image": paths.itemIcon + "2052.png"},
            "2053": {"name": "Raptor Cloak", "id": 2053, "image": paths.itemIcon + "2053.png"},
            "2054": {"name": "Diet Poro-Snax", "id": 2054, "image": paths.itemIcon + "2054.png"},
            "2138": {"name": "Elixir of Iron", "id": 2138, "image": paths.itemIcon + "2138.png"},
            "2139": {"name": "Elixir of Sorcery", "id": 2139, "image": paths.itemIcon + "2139.png"},
            "2140": {"name": "Elixir of Wrath", "id": 2140, "image": paths.itemIcon + "2140.png"},
            "2301": {"name": "Eye of the Watchers", "id": 2301, "image": paths.itemIcon + "2301.png"},
            "2302": {"name": "Eye of the Oasis", "id": 2302, "image": paths.itemIcon + "2302.png"},
            "2303": {"name": "Eye of the Equinox", "id": 2303, "image": paths.itemIcon + "2303.png"},
            "3001": {"name": "Abyssal Scepter", "id": 3001, "image": paths.itemIcon + "3001.png"},
            "3003": {"name": "Archangel's Staff", "id": 3003, "image": paths.itemIcon + "3003.png"},
            "3004": {"name": "Manamune", "id": 3004, "image": paths.itemIcon + "3004.png"},
            "3006": {"name": "Berserker's Greaves", "id": 3006, "image": paths.itemIcon + "3006.png"},
            "3007": {"name": "Archangel's Staff (Crystal Scar)", "id": 3007, "image": paths.itemIcon + "3007.png"},
            "3008": {"name": "Manamune (Crystal Scar)", "id": 3008, "image": paths.itemIcon + "3008.png"},
            "3009": {"name": "Boots of Swiftness", "id": 3009, "image": paths.itemIcon + "3009.png"},
            "3010": {"name": "Catalyst the Protector", "id": 3010, "image": paths.itemIcon + "3010.png"},
            "3020": {"name": "Sorcerer's Shoes", "id": 3020, "image": paths.itemIcon + "3020.png"},
            "3022": {"name": "Frozen Mallet", "id": 3022, "image": paths.itemIcon + "3022.png"},
            "3024": {"name": "Glacial Shroud", "id": 3024, "image": paths.itemIcon + "3024.png"},
            "3025": {"name": "Iceborn Gauntlet", "id": 3025, "image": paths.itemIcon + "3025.png"},
            "3026": {"name": "Guardian Angel", "id": 3026, "image": paths.itemIcon + "3026.png"},
            "3027": {"name": "Rod of Ages", "id": 3027, "image": paths.itemIcon + "3027.png"},
            "3028": {"name": "Chalice of Harmony", "id": 3028, "image": paths.itemIcon + "3028.png"},
            "3029": {"name": "Rod of Ages (Crystal Scar)", "id": 3029, "image": paths.itemIcon + "3029.png"},
            "3031": {"name": "Infinity Edge", "id": 3031, "image": paths.itemIcon + "3031.png"},
            "3033": {"name": "Mortal Reminder", "id": 3033, "image": paths.itemIcon + "3033.png"},
            "3034": {"name": "Giant Slayer", "id": 3034, "image": paths.itemIcon + "3034.png"},
            "3035": {"name": "Last Whisper", "id": 3035, "image": paths.itemIcon + "3035.png"},
            "3036": {"name": "Lord Dominik's Regards", "id": 3036, "image": paths.itemIcon + "3036.png"},
            "3040": {"name": "Seraph's Embrace", "id": 3040, "image": paths.itemIcon + "3040.png"},
            "3041": {"name": "Mejai's Soulstealer", "id": 3041, "image": paths.itemIcon + "3041.png"},
            "3042": {"name": "Muramana", "id": 3042, "image": paths.itemIcon + "3042.png"},
            "3043": {"name": "Muramana", "id": 3043, "image": paths.itemIcon + "3043.png"},
            "3044": {"name": "Phage", "id": 3044, "image": paths.itemIcon + "3044.png"},
            "3046": {"name": "Phantom Dancer", "id": 3046, "image": paths.itemIcon + "3046.png"},
            "3047": {"name": "Ninja Tabi", "id": 3047, "image": paths.itemIcon + "3047.png"},
            "3048": {"name": "Seraph's Embrace", "id": 3048, "image": paths.itemIcon + "3048.png"},
            "3050": {"name": "Zeke's Harbinger", "id": 3050, "image": paths.itemIcon + "3050.png"},
            "3052": {"name": "Jaurim's Fist", "id": 3052, "image": paths.itemIcon + "3052.png"},
            "3053": {"name": "Sterak's Gage", "id": 3053, "image": paths.itemIcon + "3053.png"},
            "3056": {"name": "Ohmwrecker", "id": 3056, "image": paths.itemIcon + "3056.png"},
            "3057": {"name": "Sheen", "id": 3057, "image": paths.itemIcon + "3057.png"},
            "3060": {"name": "Banner of Command", "id": 3060, "image": paths.itemIcon + "3060.png"},
            "3065": {"name": "Spirit Visage", "id": 3065, "image": paths.itemIcon + "3065.png"},
            "3067": {"name": "Kindlegem", "id": 3067, "image": paths.itemIcon + "3067.png"},
            "3068": {"name": "Sunfire Cape", "id": 3068, "image": paths.itemIcon + "3068.png"},
            "3069": {"name": "Talisman of Ascension", "id": 3069, "image": paths.itemIcon + "3069.png"},
            "3070": {"name": "Tear of the Goddess", "id": 3070, "image": paths.itemIcon + "3070.png"},
            "3071": {"name": "The Black Cleaver", "id": 3071, "image": paths.itemIcon + "3071.png"},
            "3072": {"name": "The Bloodthirster", "id": 3072, "image": paths.itemIcon + "3072.png"},
            "3073": {
                "name": "Tear of the Goddess (Crystal Scar)",
                "id": 3073,
                "image": paths.itemIcon + "3073.png"
            },
            "3074": {"name": "Ravenous Hydra", "id": 3074, "image": paths.itemIcon + "3074.png"},
            "3075": {"name": "Thornmail", "id": 3075, "image": paths.itemIcon + "3075.png"},
            "3077": {"name": "Tiamat", "id": 3077, "image": paths.itemIcon + "3077.png"},
            "3078": {"name": "Trinity Force", "id": 3078, "image": paths.itemIcon + "3078.png"},
            "3082": {"name": "Warden's Mail", "id": 3082, "image": paths.itemIcon + "3082.png"},
            "3083": {"name": "Warmog's Armor", "id": 3083, "image": paths.itemIcon + "3083.png"},
            "3084": {"name": "Overlord's Bloodmail", "id": 3084, "image": paths.itemIcon + "3084.png"},
            "3085": {"name": "Runaan's Hurricane", "id": 3085, "image": paths.itemIcon + "3085.png"},
            "3086": {"name": "Zeal", "id": 3086, "image": paths.itemIcon + "3086.png"},
            "3087": {"name": "Statikk Shiv", "id": 3087, "image": paths.itemIcon + "3087.png"},
            "3089": {"name": "Rabadon's Deathcap", "id": 3089, "image": paths.itemIcon + "3089.png"},
            "3090": {"name": "Wooglet's Witchcap", "id": 3090, "image": paths.itemIcon + "3090.png"},
            "3091": {"name": "Wit's End", "id": 3091, "image": paths.itemIcon + "3091.png"},
            "3092": {"name": "Frost Queen's Claim", "id": 3092, "image": paths.itemIcon + "3092.png"},
            "3094": {"name": "Rapid Firecannon", "id": 3094, "image": paths.itemIcon + "3094.png"},
            "3096": {"name": "Nomad's Medallion", "id": 3096, "image": paths.itemIcon + "3096.png"},
            "3097": {"name": "Targon's Brace", "id": 3097, "image": paths.itemIcon + "3097.png"},
            "3098": {"name": "Frostfang", "id": 3098, "image": paths.itemIcon + "3098.png"},
            "3100": {"name": "Lich Bane", "id": 3100, "image": paths.itemIcon + "3100.png"},
            "3101": {"name": "Stinger", "id": 3101, "image": paths.itemIcon + "3101.png"},
            "3102": {"name": "Banshee's Veil", "id": 3102, "image": paths.itemIcon + "3102.png"},
            "3104": {"name": "Lord Van Damm's Pillager", "id": 3104, "image": paths.itemIcon + "3104.png"},
            "3105": {"name": "Aegis of the Legion", "id": 3105, "image": paths.itemIcon + "3105.png"},
            "3106": {"name": "Madred's Razors", "id": 3106, "image": paths.itemIcon + "3106.png"},
            "3108": {"name": "Fiendish Codex", "id": 3108, "image": paths.itemIcon + "3108.png"},
            "3110": {"name": "Frozen Heart", "id": 3110, "image": paths.itemIcon + "3110.png"},
            "3111": {"name": "Mercury's Treads", "id": 3111, "image": paths.itemIcon + "3111.png"},
            "3112": {"name": "Orb of Winter", "id": 3112, "image": paths.itemIcon + "3112.png"},
            "3113": {"name": "Aether Wisp", "id": 3113, "image": paths.itemIcon + "3113.png"},
            "3114": {"name": "Forbidden Idol", "id": 3114, "image": paths.itemIcon + "3114.png"},
            "3115": {"name": "Nashor's Tooth", "id": 3115, "image": paths.itemIcon + "3115.png"},
            "3116": {"name": "Rylai's Crystal Scepter", "id": 3116, "image": paths.itemIcon + "3116.png"},
            "3117": {"name": "Boots of Mobility", "id": 3117, "image": paths.itemIcon + "3117.png"},
            "3122": {"name": "Wicked Hatchet", "id": 3122, "image": paths.itemIcon + "3122.png"},
            "3123": {"name": "Executioner's Calling", "id": 3123, "image": paths.itemIcon + "3123.png"},
            "3124": {"name": "Guinsoo's Rageblade", "id": 3124, "image": paths.itemIcon + "3124.png"},
            "3133": {"name": "Caulfield's Warhammer", "id": 3133, "image": paths.itemIcon + "3133.png"},
            "3134": {"name": "Serrated Dirk", "id": 3134, "image": paths.itemIcon + "3134.png"},
            "3135": {"name": "Void Staff", "id": 3135, "image": paths.itemIcon + "3135.png"},
            "3136": {"name": "Haunting Guise", "id": 3136, "image": paths.itemIcon + "3136.png"},
            "3137": {"name": "Dervish Blade", "id": 3137, "image": paths.itemIcon + "3137.png"},
            "3139": {"name": "Mercurial Scimitar", "id": 3139, "image": paths.itemIcon + "3139.png"},
            "3140": {"name": "Quicksilver Sash", "id": 3140, "image": paths.itemIcon + "3140.png"},
            "3142": {"name": "Youmuu's Ghostblade", "id": 3142, "image": paths.itemIcon + "3142.png"},
            "3143": {"name": "Randuin's Omen", "id": 3143, "image": paths.itemIcon + "3143.png"},
            "3144": {"name": "Bilgewater Cutlass", "id": 3144, "image": paths.itemIcon + "3144.png"},
            "3145": {"name": "Hextech Revolver", "id": 3145, "image": paths.itemIcon + "3145.png"},
            "3146": {"name": "Hextech Gunblade", "id": 3146, "image": paths.itemIcon + "3146.png"},
            "3151": {"name": "Liandry's Torment", "id": 3151, "image": paths.itemIcon + "3151.png"},
            "3152": {"name": "Will of the Ancients", "id": 3152, "image": paths.itemIcon + "3152.png"},
            "3153": {"name": "Blade of the Ruined King", "id": 3153, "image": paths.itemIcon + "3153.png"},
            "3154": {"name": "Wriggle's Lantern", "id": 3154, "image": paths.itemIcon + "3154.png"},
            "3155": {"name": "Hexdrinker", "id": 3155, "image": paths.itemIcon + "3155.png"},
            "3156": {"name": "Maw of Malmortius", "id": 3156, "image": paths.itemIcon + "3156.png"},
            "3157": {"name": "Zhonya's Hourglass", "id": 3157, "image": paths.itemIcon + "3157.png"},
            "3158": {"name": "Ionian Boots of Lucidity", "id": 3158, "image": paths.itemIcon + "3158.png"},
            "3159": {"name": "Grez's Spectral Lantern", "id": 3159, "image": paths.itemIcon + "3159.png"},
            "3165": {"name": "Morellonomicon", "id": 3165, "image": paths.itemIcon + "3165.png"},
            "3170": {"name": "Moonflair Spellblade", "id": 3170, "image": paths.itemIcon + "3170.png"},
            "3174": {"name": "Athene's Unholy Grail", "id": 3174, "image": paths.itemIcon + "3174.png"},
            "3180": {"name": "Odyn's Veil", "id": 3180, "image": paths.itemIcon + "3180.png"},
            "3181": {"name": "Sanguine Blade", "id": 3181, "image": paths.itemIcon + "3181.png"},
            "3184": {"name": "Entropy", "id": 3184, "image": paths.itemIcon + "3184.png"},
            "3185": {"name": "The Lightbringer", "id": 3185, "image": paths.itemIcon + "3185.png"},
            "3187": {"name": "Hextech Sweeper", "id": 3187, "image": paths.itemIcon + "3187.png"},
            "3190": {"name": "Locket of the Iron Solari", "id": 3190, "image": paths.itemIcon + "3190.png"},
            "3191": {"name": "Seeker's Armguard", "id": 3191, "image": paths.itemIcon + "3191.png"},
            "3196": {"name": "The Hex Core mk-1", "id": 3196, "image": paths.itemIcon + "3196.png"},
            "3197": {"name": "The Hex Core mk-2", "id": 3197, "image": paths.itemIcon + "3197.png"},
            "3198": {"name": "Perfect Hex Core", "id": 3198, "image": paths.itemIcon + "3198.png"},
            "3200": {"name": "Prototype Hex Core", "id": 3200, "image": paths.itemIcon + "3200.png"},
            "3211": {"name": "Spectre's Cowl", "id": 3211, "image": paths.itemIcon + "3211.png"},
            "3222": {"name": "Mikael's Crucible", "id": 3222, "image": paths.itemIcon + "3222.png"},
            "3240": {"name": "Enchantment: Furor", "id": 3240, "image": paths.itemIcon + "3240.png"},
            "3241": {"name": "Enchantment: Alacrity", "id": 3241, "image": paths.itemIcon + "3241.png"},
            "3242": {"name": "Enchantment: Captain", "id": 3242, "image": paths.itemIcon + "3242.png"},
            "3243": {"name": "Enchantment: Distortion", "id": 3243, "image": paths.itemIcon + "3243.png"},
            "3285": {"name": "Luden's Echo", "id": 3285, "image": paths.itemIcon + "3285.png"},
            "3301": {"name": "Ancient Coin", "id": 3301, "image": paths.itemIcon + "3301.png"},
            "3302": {"name": "Relic Shield", "id": 3302, "image": paths.itemIcon + "3302.png"},
            "3303": {"name": "Spellthief's Edge", "id": 3303, "image": paths.itemIcon + "3303.png"},
            "3340": {"name": "Warding Totem (Trinket)", "id": 3340, "image": paths.itemIcon + "3340.png"},
            "3341": {"name": "Sweeping Lens (Trinket)", "id": 3341, "image": paths.itemIcon + "3341.png"},
            "3345": {"name": "Soul Anchor (Trinket)", "id": 3345, "image": paths.itemIcon + "3345.png"},
            "3348": {"name": "Hextech Sweeper", "id": 3348, "image": paths.itemIcon + "3348.png"},
            "3361": {"name": "Greater Stealth Totem (Trinket)", "id": 3361, "image": paths.itemIcon + "3361.png"},
            "3362": {"name": "Greater Vision Totem (Trinket)", "id": 3362, "image": paths.itemIcon + "3362.png"},
            "3363": {"name": "Farsight Alteration", "id": 3363, "image": paths.itemIcon + "3363.png"},
            "3364": {"name": "Oracle Alteration", "id": 3364, "image": paths.itemIcon + "3364.png"},
            "3401": {"name": "Face of the Mountain", "id": 3401, "image": paths.itemIcon + "3401.png"},
            "3460": {"name": "Golden Transcendence", "id": 3460, "image": paths.itemIcon + "3460.png"},
            "3504": {"name": "Ardent Censer", "id": 3504, "image": paths.itemIcon + "3504.png"},
            "3508": {"name": "Essence Reaver", "id": 3508, "image": paths.itemIcon + "3508.png"},
            "3512": {"name": "Zz'Rot Portal", "id": 3512, "image": paths.itemIcon + "3512.png"},
            "3599": {"name": "The Black Spear", "id": 3599, "image": paths.itemIcon + "3599.png"},
            "3671": {"name": "Enchantment: Warrior", "id": 3671, "image": paths.itemIcon + "3671.png"},
            "3672": {"name": "Enchantment: Cinderhulk", "id": 3672, "image": paths.itemIcon + "3672.png"},
            "3673": {"name": "Enchantment: Runeglaive", "id": 3673, "image": paths.itemIcon + "3673.png"},
            "3674": {"name": "Enchantment: Devourer", "id": 3674, "image": paths.itemIcon + "3674.png"},
            "3706": {"name": "Stalker's Blade", "id": 3706, "image": paths.itemIcon + "3706.png"},
            "3711": {"name": "Tracker's Knife", "id": 3711, "image": paths.itemIcon + "3711.png"},
            "3715": {"name": "Skirmisher's Sabre", "id": 3715, "image": paths.itemIcon + "3715.png"},
            "3742": {"name": "Dead Man's Plate", "id": 3742, "image": paths.itemIcon + "3742.png"},
            "3744": {"name": "Staff of Flowing Water", "id": 3744, "image": paths.itemIcon + "3744.png"},
            "3748": {"name": "Titanic Hydra", "id": 3748, "image": paths.itemIcon + "3748.png"},
            "3751": {"name": "Bami's Cinder", "id": 3751, "image": paths.itemIcon + "3751.png"},
            "3800": {"name": "Righteous Glory", "id": 3800, "image": paths.itemIcon + "3800.png"},
            "3801": {"name": "Crystalline Bracer", "id": 3801, "image": paths.itemIcon + "3801.png"},
            "3812": {"name": "Death's Dance", "id": 3812, "image": paths.itemIcon + "3812.png"},
            "3901": {"name": "Fire at Will", "id": 3901, "image": paths.itemIcon + "3901.png"},
            "3902": {"name": "Death's Daughter", "id": 3902, "image": paths.itemIcon + "3902.png"},
            "3903": {"name": "Raise Morale", "id": 3903, "image": paths.itemIcon + "3903.png"},
            "3930": {"name": "Enchantment: Sated Devourer", "id": 3930, "image": paths.itemIcon + "3930.png"},
            "3931": {"name": "Enchantment: Sated Devourer", "id": 3931, "image": paths.itemIcon + "3931.png"},
            "3932": {"name": "Enchantment: Sated Devourer", "id": 3932, "image": paths.itemIcon + "3932.png"}
        }
    }

}());
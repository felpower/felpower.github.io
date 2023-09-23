'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8439beb8b1732c0a2985d22d90c57484",
".git/config": "5cee0db8c39e84f4c4974ae2b94bc5fa",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ad887483fee30762d0e6db4c2283ecaf",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ad21203249518c67708ee71111c14df9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9f49d48efa152b0e4f33719229bab1a1",
".git/logs/refs/heads/main": "8feed9a4623253674828fe181694c597",
".git/logs/refs/remotes/origin/main": "19d8c69c888f9bfa8d71d5ef05163438",
".git/objects/05/3e4e09ca38fa0d84553fe2b66ef39a9ea9bd45": "0733e3a1a294c6c38072140f24288235",
".git/objects/07/6b3709c5626402b63519b7521e62547cf4c604": "c2e6b58089c16633131c280bcf954575",
".git/objects/07/db393850608b8752b24045c47c03b19bb35610": "ddefc8dbdc911b3ea4514535227ceb67",
".git/objects/08/1c3d37448fb5340e15d53632f0d22a0fe9b692": "249cf7ac39424de5d6f4adfc117fe302",
".git/objects/08/27af5275897bdd7dd040176834b1df72f5be5c": "ab0198a16c444ab0e8d4600ad0c0ccb3",
".git/objects/08/6b346055a670431eeddd3474f79fd6aa1aa62a": "5f207bc24fe5080c390c0f7caeb64d0f",
".git/objects/0b/17a4370183b88c9f34474e81287e3f030c15d6": "88109b5b8580ed9f4eab64b7317135fd",
".git/objects/13/9c5b7664ea1b6bcf53b09545da617f1790c058": "25f220d768f7081091dbc82ec6af7609",
".git/objects/15/d99849c71f803f9d9fdb2f6f198178af9cc2ec": "ec637dfa6c01b45d323fb6ffd89e6a1b",
".git/objects/19/4e61fe22144b08df28803b14743848a6ecc886": "c0a5563f50a9ba3594911d70565e92cc",
".git/objects/1d/2286e9bb89fc70384d8a4ff2b815220b42cbd8": "343f3ec5173f8d674916db30f4dc91e9",
".git/objects/1d/3764d3f55a4e51d7ee9d026f17d34005bc1f0f": "51473846bbf7fab5d9fab292abea5ab5",
".git/objects/1f/9942e900ceb5515c76c853307e015c425492d6": "f9f5e591080ac16f717a0f16628763a6",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/411a92c9744d99b9a04d37d75ffb2053393726": "2be06b22feac2545cc288cddad901263",
".git/objects/20/c1da7527b6e3018a40e8e285b79bc77ddc7ad1": "85fccdd45e78eb1232c745e481409394",
".git/objects/20/eb1629fdf789ff5422f45c564bc7c0ec8b6807": "4ffc797283470a3bae7b1d402f1aad75",
".git/objects/21/6759c603459b043f95abae60133c61544ce331": "7cf1f80608df3a3a9eb305c0095d3bb0",
".git/objects/21/fbd8827a6837e129f35ae1c16d246ad1491085": "8ae6c5e9c77d1f2557681f098748a0da",
".git/objects/22/86c391c4117af7b95b884842acf2ac0f1a281d": "3f6b2208cf8104fe01f71a2554c3136a",
".git/objects/23/56256b4d5e6eecd24ff83a5af2504349322090": "1a118f09e172423705baf6865f37c653",
".git/objects/27/d4f0e018958fe6fee4494313c6c0c82f002112": "e1e4fc85817980bf2a54075fd2903f8f",
".git/objects/28/f498fecabf3664aa204bc283ba4d82d2eded88": "3a6725a8ecc109219e7cdd80f7bf82d9",
".git/objects/2a/2031da774f3dc08cde3164fbd2d09f4ac270f9": "93424f6485516fd22fa2ffee2b779256",
".git/objects/2c/21a8e011c61bb95c5541b6a5580e6e285bb9c2": "fa50b7aa29c03b6cb2563bd752618f49",
".git/objects/2c/3323841b378f8f84e7bf977e1292a982fe563b": "75b0b10ffaf00a1eb085845491571f75",
".git/objects/2c/39a14f78b34742de8a90135dea553fbe443212": "d7a6edb728b1b9fba0ee22091a202296",
".git/objects/2c/5581da797852d47d870bfb9e8ae567442053e2": "ba6c35fa6726ae5ad883af76c580a02a",
".git/objects/2e/264c7be1ed0f2bcc336aaf38c409ec61ccf4a9": "05e8b8d26fa886f00d516fb09dc7fbdb",
".git/objects/2f/5869933b81be3b309917154ddaff921782498c": "6288d544eb83206610a58e9d2bcda669",
".git/objects/2f/dfd53319f3bfb0c102f6e2ca63113c07de4a65": "6f57721dca989b9cd8f2cf1137dcd31f",
".git/objects/30/4c35408476eb58cec213a49937981e41e6481c": "1aec7ddb620acbab8ecd18a28b437dc0",
".git/objects/31/5d9e4565030a8b83b4b3ee7309a13e6163bc6f": "290023bc35479d814049324c8cbe801e",
".git/objects/32/07df8830c468a3c5d17092d5ae29e21a60e7a2": "95e03ca82f6ad5a95f85e355e5fbcce8",
".git/objects/33/8b1ae11040ab9dc728694efc38e8140bc7c332": "6b769c355cbf9a8cf8486435399cd0a9",
".git/objects/34/ad9831711ff9d289314a392640a1a9c126846e": "c4f0fc8faee4588c16affdb5bfebbbeb",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/cac72d200e6f881226fbf2699973c1a028e5f5": "136c2610600d50f203e348892c1ee8b7",
".git/objects/36/81b83117158ce34f3bc32295345a5e84eaa93d": "77d5b60fe44b3c217957df03591acb8b",
".git/objects/36/d3948c79a44cf191000df0ac8aba9d0adbbc33": "d60204a4f4e60749dc6f5f35fa872146",
".git/objects/37/94337d98b552095b033575bc30902ee7ce42c4": "463eb4d3013820107b06e8e124aea844",
".git/objects/37/c09b0a1d85581fd46fa5f867c4a14d6f8b7094": "198aa55682c60eae1515989516f756cc",
".git/objects/37/ca54c99b47d15787ac77ed1859c1cf693e2ff3": "645c04e2cae61a9f629340e3c52357ec",
".git/objects/3b/caa13b5d4534235621cd39ffff2c2e625ca262": "90a0167b5c7038281dd732c2904af2c6",
".git/objects/3b/db46127963641f70f2c493f9aa07855de18d9b": "f91589fc87acf718a31c516a192baf71",
".git/objects/3b/ee447b7b6f893b7155de50b831be764b2e59d8": "4cc48f4641f2ef1dedfb843044f43edc",
".git/objects/3d/91037cd360e1d365062abbbbe456cfb6dacf98": "5af9d80e1e587b585a7ef3960593924d",
".git/objects/3f/a6ab67b1678cd8d22a5bd8a0b6384aba3eb094": "f59acbb27006d858a4c9087800b717a4",
".git/objects/41/97dc09f560bdde6a4e478f600f3ba063d03682": "ded442da516cd27f60221eb3e598ab03",
".git/objects/42/d03916d03096e6a3f5589ed94d1cdfe9740b3d": "4d9e9abc91e6a5285c48a8897d816c8e",
".git/objects/44/12d0ed8d76ea21983414e696b818f86a59da9d": "86b039e15f6d6c6cd086a13b51b62a8c",
".git/objects/46/70d2a91ed6e419e68a3bed2626139be3a6d14a": "fd0001fbb868dc54e66aea0ae66c8d34",
".git/objects/47/62c996c0441054f98029ba16f9a563fd1f7342": "f04c8e93c3d856d2ad81c2e1e9a6486b",
".git/objects/4a/7671d9c83fae0d868ea7770a4fe298a1777f52": "37b7a14ce9d48363cc28c5c466aabfbf",
".git/objects/4c/f2089a01bfb44ff1b0e2f28d51aa19970b246e": "4451bf4d0ea42108ad003120897322d0",
".git/objects/4d/2f260a89c4579ff808d50c811cf50b4d93b95f": "af4ae62df971556ef35d61a51bd1b7d2",
".git/objects/50/921140a970128b71d83bf5f056d6e862805e6f": "97afd290062aae525e2b105e8bc67cad",
".git/objects/53/158b4a93367da9e8b0c03339eaa2cf0cf38ae4": "7f308fe8b07f75227d7d17b30e1678d1",
".git/objects/53/5743a212ffdcb7097bee2e803f383f1c5305f5": "e16765e5bc642a795611760e47befc17",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/57/f4bbf84072852edc1ea6826aef7bfcb83d7ede": "697a8a0d32bce078dea3b12fb9cd7959",
".git/objects/58/198200c3f54408d79dcad22ee857c2b9586099": "533a85817699f515664ae3d3e8d35223",
".git/objects/58/b8f89286fb3bdcb920b0fc7f1033953666ec8d": "ae2a2a828a031bee9ca5fdc1a744d86f",
".git/objects/59/3a32907e093f9d802865cfbb1ea46a2946bc56": "c00c697e556fe869ca761ac1e66dc57b",
".git/objects/59/3c74805a195b43ccac852280b10d8f547f5283": "982e1c43a66a305769dac024861a8546",
".git/objects/59/3cede16c7bbec0953afd56337c25cc076fb4b3": "f5e8f4ee68709a9a811b993fec79f4d2",
".git/objects/59/df5ef2ebfb9f66178748e918e7746bc295796d": "36e8aab7a590dc2e4452e7c32d54e0ba",
".git/objects/5b/08d02add4effdd0889f4e4b5ecf69d388cdb9a": "00f3e9ba2e373e4b90c52b2e65363f3a",
".git/objects/5d/c142ea13e8a3f831127d7bf1534f662ef772fa": "6b8d35858bd3ec1fd16294fbd899445c",
".git/objects/5e/84c22a1415099337347ac45bbf2db2aa264116": "38c7e2ae3582e9b196d8e6c83713f459",
".git/objects/5f/38f3df986d1796e01e058656aac1a469e45c6c": "0f8e37d4c5ae6194c71bf86f26eeb33e",
".git/objects/5f/95ddbad10def29ed90371a7d444d92d20fdf2b": "ee9be61dfe30463c0f108c566d2ceb99",
".git/objects/61/42b3522087abe666c4f618893e8cb1a53ea93e": "1f52326c3a85298944bc25942032e504",
".git/objects/62/ea6a2b5abf148774e2460b417f95f4b9be9f9f": "02ae889742735375456bf9b071494293",
".git/objects/63/56e71fb5682723a3e208fc3480910d143527b6": "8bbc6eab160dde529ed5f73cf8ead8d3",
".git/objects/63/d80ad45d8905c597fbaaf1da8337931da61e9d": "88796dbc3d5e02f96bb3946f2034e704",
".git/objects/68/60e32b68162ea02a21b8b3b22511104d2e9f69": "e9f81a41dcbbd3570d9076d7db9b5b1f",
".git/objects/69/a29c8d1d94e6290c36b94eb64da2bef077a7ff": "fd308d617ef153ad4ede2c37038599c4",
".git/objects/6b/d89f56e13e700977b5a77cf5ce26c97c1b1177": "ebcf3d4ade8d19142d20c1ac49c8a82f",
".git/objects/6c/d5e83195f1f362e50e5ebce671d33ad535d389": "25752731dbac3462e9b6e0698e548b68",
".git/objects/6e/ecb98a7a82f022964c5a6b108938c5d84e2f4f": "5e10708a48888066bd0863015ae05871",
".git/objects/6f/45fd35727044df80c7deb20bd47f50e7e15f74": "f67701dca51b1fd11955718c782df9f5",
".git/objects/6f/568019d3c69d4966bb5a0f759980a1472afc1e": "11711ec452167a523e427fab835abd15",
".git/objects/70/87c2239fd7e8d2b0735f6734707a1d40aa1d68": "8cb1ca399e4a96a572f019931a62d17d",
".git/objects/71/5a7f67256ee218855d62634b61473b98b006b5": "bd326dc73e71fd70e3063dd9efec9048",
".git/objects/72/448c9e36e65c1da26fd70b8f8bbbfe3d50721e": "6c91018544922a4d8b9fe8ba516fadd1",
".git/objects/75/996889772b1fc2bc11b4ab1536c32e5495401a": "5010a3db996db122d166e7d4c4efd609",
".git/objects/7a/0a124f96cb0a62f2e5f0e111b8eca645490a35": "529b79358323e83ee84720325bfcfc96",
".git/objects/7a/54cb9e48de4f43f06524578f85dfa060077803": "c48f693b534a7d3ad490af6ea1d0dac9",
".git/objects/7a/d7231e7e9d83cb76d05b90cb16eabba4daae85": "144e4ae296a0d39f52d8b0d7dbc73f42",
".git/objects/7d/d8ef9740e000ea78bafaa23713e1c768e183e3": "0556b3b009fca9c12b5059af545bafee",
".git/objects/7e/d44b55b55df05c9dfeaa8db5a0ce9f781baa67": "855533e6576c0501f66f596e2df41fdb",
".git/objects/7f/6e6631fd04141c33e5dd83699babfd79929234": "50a4bd735d673a4fb2b78480a69e2f00",
".git/objects/80/202073917bcbb8ec7cb9743227c032108f9722": "a9d028a18280d87e88daf844f7251452",
".git/objects/80/f9e36ac2537ad8dae935a68e7833eab6b502a1": "c5e4a8c0e1d580c6528f32b9caca02d6",
".git/objects/82/c90cda4559d1996d800c5a399f53dde8da18d7": "7274674fa4ed0f0a3848e613c076e130",
".git/objects/83/15db5f403f882821e208cee439aa576debbd57": "1e62d03de3f3ddfdccc3b5952a1fea1f",
".git/objects/83/f78a26699bdfcfced4055869ab1e9bad4606f9": "c7ab8f53867dcff31cc9fb61639b0ec9",
".git/objects/86/23db259c532b6d87d67555e987a9036468ffaa": "5708d1dafb745bda18a8c8b37d48a11c",
".git/objects/87/2eb20bac0e5975840e88b9e751a384c3a37d3e": "4c5ad55d173d64b4ae56f003f4dea076",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/789370b45222a65735282a2c23900cf9238007": "2e882b04182d2a5eec6a79d3b51a24e6",
".git/objects/8c/f4965af6e7f132f7ed035d6190c7a891da46be": "e72b33a7c577e7086f024b3a6ffc3a73",
".git/objects/90/046e4dd6b98fbfc8666b7f8f94c90c8601a188": "fee4cb7b69e75a5a2ad1f987c20cf92b",
".git/objects/91/8e3dd17d59cc1b4182e6d5ba096993731d43cf": "29089eef23c0fd036ca0970a1079f055",
".git/objects/93/6eae04120237f866f3c4c2269d8f1a3efee54e": "2e122962bb2ba693062d6c66d3793ac1",
".git/objects/97/1df5bb9ce7a26a02a7aa7e43ad2b9cc8979aef": "02d41e9af8747d94baeffbf10cd9c17d",
".git/objects/97/51d79a98a5cb6c4eaecbbead719e2515320e19": "a735d5f7722c20b4c020d7fad118e876",
".git/objects/97/a4bc76f8dd04d9c0e3c3a18afbedb2c73e54c5": "aeb2bc83cc0be148b377fe51e1eba249",
".git/objects/9c/de001175380264e6393df7de37d38afd9585af": "393bd9e81d0c302224529ee7e0cb2747",
".git/objects/9c/e40a96ef6de5e8377ce4c28937d972e5c08b9b": "880d82f92f1d505638657ef002de5952",
".git/objects/9d/dff3ae4f01adff5cda37a7d9b9bbf30e49cb58": "11c586d02222c1bc1daeecb3a751e20d",
".git/objects/9f/0ab84b9d5f75c2c2de21c18d382c8d7adff393": "5ab68f4a93a9443c6aea28a5940d709e",
".git/objects/9f/8420b1519b43fc7b4550c891d4185dc76a4976": "47cf9753e9a5e399f88764ef06c3eb0d",
".git/objects/9f/b7ecf375bdbe5d0dba79a4c74ee120d6748097": "29a37b3f8cd350bcb64403883eed2fea",
".git/objects/a1/7c8297bd546307e525b0f0a3745f62ad4b06bb": "c3febe4c45b2ee2ac85bf24f5bca9460",
".git/objects/a1/96a4baf7807cbecd60e586f2ce13595baa3696": "3d6c1b3368c66e0cd1b86096edeabc3f",
".git/objects/a2/7aaeaf6046b8c7b69bb4e1ffe7e7114e3ab71a": "24a45e2c6624e70d9dee622e66f755b0",
".git/objects/a4/356f74d0e4ef20fdfa498eee87337e22ab8b10": "e67937e5e3b68eed8daee59dc6e611ea",
".git/objects/a5/a2c2d9f14887dc19b42aa2fda9f9b50ef6e66f": "0abd9d74fca0984565fee42c2ae8ebe1",
".git/objects/a7/638745b57e5f0f9d15f86f379ecfbf35058e06": "8bd70402234248f1777ab087a1c8234f",
".git/objects/ab/0470a55451304828b64d46d3390d1316ed9836": "002ce786f95dca925f22230d4bb0a40d",
".git/objects/ad/0aec626e039ef245f94b14aab998afb0b06263": "d8bf198fb1f9bf7f3b19122675a2b5d2",
".git/objects/ae/17dda96c08c0f7c5dfa4161208c193e3937093": "d85dab18859918ca9fef78e621be764f",
".git/objects/af/13cf0efc9ec13777e85fe1b1cf85e5a0d3ec8a": "22dadbdc004ac2b35efe2f91827b0dd2",
".git/objects/af/bcb5bbaad6969d148ea072a1c60ef36b469548": "40146a93e0d1b0a9c3f17f402f0f6bc5",
".git/objects/b0/600fd7eb02348365dbfe923c60fa6853863786": "f5a4ea664d7bd9199128e692e688240d",
".git/objects/b2/e9c98a79f6695b27ed272ea5cfb838170e7478": "f6f5d3e3efb09dac84bf405a1dc9be66",
".git/objects/b3/e1fe63cb32c9bc7584aab852d94c6503036f8e": "7349a37931b55e9d99aed84c9ef5e677",
".git/objects/b4/06eea9d94bb9f4708da7146d4b6d1266df7492": "e6494fb503b0f87cf7ada4066279e36a",
".git/objects/b6/7ab5ae72ca7451cc4389260c2114896a79655f": "f048c429c3fc9034cc1e7a6ad4a4b56f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/5d212c9212383d3787ce4e3fccb582bab3a190": "9e832e18d7c20c3e5c9fc24981661688",
".git/objects/ba/3aae983f1cd4be91b29d1e42e3daa7b5029f03": "1db25c5a8339087423e0488d89d44988",
".git/objects/bb/75ba464a69d0a0fdbf118c4da160e3363480e3": "085e28208f28fd597016775662cf04f0",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/90a5733785b1685804b9e9c066e6d75a6608fe": "bdf5e486df1d265edc4c96e0184209e8",
".git/objects/bf/bf2c7e299b5993d271345732f21410987d7ea0": "ae391b73bf8f108e8809fde1d482ee45",
".git/objects/bf/d27c16e6eaa2e7a48d52baeb333bb425268b22": "651e167aba3757fc41d5646966de708c",
".git/objects/c2/57870d98c05e9f378d55c2f37188c24a096ac7": "4410c68057bbd8c4c7131d73c7aadd06",
".git/objects/c3/f0b8806fbf3d0d9265ba1a915d3200fcbd8d9c": "9598df40f4ca99f6d8fefc48328b6c96",
".git/objects/c4/211f31c7efc5d0b045ae15c3ade2e4e69c0dd5": "6e9e4118f78eb06a91079357fd254645",
".git/objects/c4/32c8666d955307ec7c690ef3624e50093513fe": "f9c9fb4fa54bfaae3c842d1510b0af55",
".git/objects/c4/7c63a78c6ec9f5c674d6c6813972877bd4d3c1": "48048b3b189041e741e54b729a0efda1",
".git/objects/c5/67cc009f278ca01f353ef374b8661297c9e53b": "140f550309ed888e6c5983afd1634db0",
".git/objects/c6/0bf3555e5a46947bb129401dc1780349dc9f7c": "4c0af88e2b0ab24aa68ea88592188fe7",
".git/objects/c7/2284ae46a27ee1177bc3bd5a4f4d9380ded7d8": "69f79c5160ebc0fa85010edb49af715f",
".git/objects/c8/0fba62b4216c2aaceae3243464101d30be1b26": "2ff0621549e52399e6b784def9d896d8",
".git/objects/c8/8bd0ebce49f80ac2f44e25164c35093d177575": "78f832a2b713294d7138018e6aa4541c",
".git/objects/d0/1612f729991d6b606e9148c70014b2d5aa5a00": "050ac0dbef6d53962ddf78fcbc44ad23",
".git/objects/d1/b273b997da5a661c0f603f6dde07a476e49968": "43b251d64e37e009809c9569de0a1099",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/673be3abcab4a9084d23f9097b7e45db68a8b4": "24d40935b2c256d18c075b1afcc3dec9",
".git/objects/df/0c7e7c34a0517a996da07f8a0c17729c2d8c4f": "de9dbf03153f969464635faecedfa196",
".git/objects/df/b2bb81f2365ffd9b454bc5a664fa91e5c12072": "11c74293820d28b06f86c5e7355d0362",
".git/objects/e0/968af9ee010be3df8958f37cefe6bff3d33b13": "c841dc9aa1fb29969223001a85ec76cc",
".git/objects/e1/1eecdee36d2a935acfa1516106056ea0c2979c": "52bbcb400c4f250d6c150f7626351778",
".git/objects/e2/7f8c453bd658447e339943349cd33de338222c": "033cb3824441a7de547368b68783cab4",
".git/objects/e3/504a626d8efbb5f9efc3a625bdb3880c3c4af1": "b3915e52b1610337c221caeebde90ebf",
".git/objects/e6/83131ab7c4fb84dd3c70b8b0869adf11da0536": "c7b82ca9dc8d98baa2a0b40b1bc130f6",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/11614947746c694c375dba2cf978dd2efefc65": "bbaf4252bd5bb532fb63400801a4fec5",
".git/objects/e7/2db44c6e9eab16a56693390ef17e1721feb13c": "869f72dc1491a533dcad6b55d17f7663",
".git/objects/e7/b6496fc9c99bf761524e2b962b6de8bfca90d7": "637565dd6ffb7b27966be72e406ffb3d",
".git/objects/ea/327f1b5cc8dfc153846166adb278168c88aa94": "20983fe419dafd61a2c0ec6ba4f3ca82",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/6eab322b1686cf8f0722b0435cf770fbcad9f9": "2a726b0c602cb407420de9605b513134",
".git/objects/f4/f177af434fed66a8ac77b49c439b64fcafce14": "c332cbdd396e18aedb4b09d55c7091ef",
".git/objects/f6/6feabec269d27af5e101643a3865e858a8f944": "d0b49dc22e354b019b520f43e6817d88",
".git/objects/f6/e58f4e8d971114bcaf195292bbcf9d729151cb": "b374f6fb56fc58b286d574080d142548",
".git/objects/f7/34e760bad901569d359bd1212b39cd02dc09a5": "6bd3016a3ef26d7b4534fbbf0b1ef8d9",
".git/objects/f9/0b996d37bc698afeadba47fa3ed49b818a1a4d": "c2739732f510fed822333a7b095cddc5",
".git/objects/fb/2a784f921084e258b44ee40c8aeaa33fada210": "c74e0bbe5299ad3197bff78cbe2537b3",
".git/objects/fc/2c920c3ba6ece0242e01d908e28ffbb2aaa5d3": "9a864d81c6e607f427443f7d3e55dc8a",
".git/objects/fc/f18550f6eb7ecd2ed4afa9050254c7e279e6d5": "5d10359af95e5c5e3c8e8885dff6a3c6",
".git/refs/heads/main": "e173f62d64999b117bf1d0eb64783832",
".git/refs/remotes/origin/main": "e173f62d64999b117bf1d0eb64783832",
"assets/AssetManifest.bin": "59216b3ef19183ba05094267d8f1a225",
"assets/AssetManifest.json": "1de23f1a8a9c8f010953379c4866eb0e",
"assets/assets/audio/bomb.wav": "6257b8d00aa498c54260229564862eea",
"assets/assets/audio/game_start.wav": "b704ae71d6b7147492ce752f40a8f777",
"assets/assets/audio/lost.wav": "3c66057ca30502bf8cda7383d070299c",
"assets/assets/audio/move_down.wav": "5415bad0aff80195c2b7e5ae00f20175",
"assets/assets/audio/swap.wav": "3a3734ec432ea13923f68f1dadb34ac3",
"assets/assets/audio/win.wav": "7740f4359c53e7415adae7d44307feb0",
"assets/assets/icons/tile.png": "4a57030ad04ea889ec226fe3eebf6977",
"assets/assets/images/background/background.jpg": "78e869de6ddb81384908778130701273",
"assets/assets/images/background/background2.jpg": "a1ce80eefc6e5a47da5a6bc4c8dbe0c1",
"assets/assets/images/bombs/blue.png": "1ee353e1f2eec8a690f5c3a3dcaee713",
"assets/assets/images/bombs/fireball.png": "72c4cdcecb74c23d47bdd753de769f3d",
"assets/assets/images/bombs/fish_1.png": "4f82f405f8032f9ac7e8e5c8273dfcfc",
"assets/assets/images/bombs/green.png": "78ffc169773ba726e0f512b96f54b433",
"assets/assets/images/bombs/mine.png": "398316f453308703bb0bd19c7cee1238",
"assets/assets/images/bombs/multi_color.png": "597164cb600190a1e14ddae14245402d",
"assets/assets/images/bombs/orange.png": "d5e3a9f2cf62617f2c0864872f509ef5",
"assets/assets/images/bombs/purple.png": "15ba18b94dda8b08ae385e7d39cad972",
"assets/assets/images/bombs/rainbow_fish.png": "acb32fabb650f8469195ce32864d54ad",
"assets/assets/images/bombs/red.png": "55f70075ff52d85f5379968db3f8b5db",
"assets/assets/images/bombs/rocket.png": "134e884cd970c6e977f0f87404386f81",
"assets/assets/images/bombs/tnt.png": "486ee84f8e727c88b6979389dbc88eba",
"assets/assets/images/bombs/yellow.png": "babb16fc0e9a1f687d94eeb3a5ff8de7",
"assets/assets/images/borders/border_1.png": "2a8a1a732c965fb8bdb96d5490af66a0",
"assets/assets/images/borders/border_10.png": "109986b29c33284a6cafc16381226e87",
"assets/assets/images/borders/border_11.png": "ad31e94aa8e864c345f27cab9a262838",
"assets/assets/images/borders/border_12.png": "ad6bad023bc2d5c44971a3d2a299f197",
"assets/assets/images/borders/border_13.png": "53d19d026224498e2667ab7e6a7dc8cb",
"assets/assets/images/borders/border_14.png": "eb30b40bd830f75c951babb15216658d",
"assets/assets/images/borders/border_15.png": "d652c10c33cfa04d612ed1ff53c02e05",
"assets/assets/images/borders/border_2.png": "8cd9760e3f5e66651a8c4be53b404f44",
"assets/assets/images/borders/border_3.png": "b0ed4b713b52069fce3fa461b994831e",
"assets/assets/images/borders/border_4.png": "ce884d98d6610fa38638cc6349ef6caf",
"assets/assets/images/borders/border_5.png": "2573f70c4db315192de991a3dee0cf91",
"assets/assets/images/borders/border_7.png": "4be5f409d94489dc0796fec126b47f8b",
"assets/assets/images/borders/border_8.png": "c184b822acb231a0aca18aee47457647",
"assets/assets/images/credit/bg.png": "d03ec45fe1bed7e84a71e169608aa464",
"assets/assets/images/credit/card_bg.png": "2c4252905bf68cbcaccf8adaff09a455",
"assets/assets/images/credit/mastercard.png": "7e386dc6c169e7164bd6f88bffb733c7",
"assets/assets/images/deco/ice_01.png": "e1117638ce968088f802ae04eb4d002f",
"assets/assets/images/deco/ice_02.png": "ec63b218bd6ca04c8389040544899ccf",
"assets/assets/images/deco/wall.png": "555094e03402d7e81aa423831bf0159f",
"assets/assets/images/login/login-page.png": "f45c95902f8a94a7d0d768041671142b",
"assets/assets/images/tiles/blue.png": "b5e6dbf6645ab9fc76e1c9a13dbffbde",
"assets/assets/images/tiles/green.png": "61d931eaafd4eb9f42e7bea4b2b6be1d",
"assets/assets/images/tiles/multicolor.png": "ae3ede85c26d69d73a32b156c6a114c6",
"assets/assets/images/tiles/orange.png": "8bb41987081b118017ceecd25210174c",
"assets/assets/images/tiles/purple.png": "f055d0c3e851abae41efb346f11907cb",
"assets/assets/images/tiles/red.png": "66dd652109f6feaee5a9b708d1041187",
"assets/assets/images/tiles/yellow.png": "dcb91d013b67145a4773a6de28baf2e4",
"assets/assets/levels.json": "5e23199875e24ad07eecda422b36a17a",
"assets/assets/unityLevels.json": "c09811758cad92f7769737645117e7c4",
"assets/assets/videos/spinning_earth.mp4": "38fbb780635feb6721f71d3bab49ebc9",
"assets/FontManifest.json": "d0975c94afeb32ec4155750ce2543f5e",
"assets/fonts/MaterialIcons-Regular.otf": "66101a7cb2de9b4692c5d9ada3aaa692",
"assets/NOTICES": "ea2d5afac5cef05e9cd5e4d46d75b67f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_credit_card/font/halter.ttf": "4e081134892cd40793ffe67fdc3bed4e",
"assets/packages/flutter_credit_card/icons/amex.png": "f75cabd609ccde52dfc6eef7b515c547",
"assets/packages/flutter_credit_card/icons/chip.png": "5728d5ac34dbb1feac78ebfded493d69",
"assets/packages/flutter_credit_card/icons/discover.png": "62ea19837dd4902e0ae26249afe36f94",
"assets/packages/flutter_credit_card/icons/elo.png": "ffd639816704b9f20b73815590c67791",
"assets/packages/flutter_credit_card/icons/hipercard.png": "921660ec64a89da50a7c82e89d56bac9",
"assets/packages/flutter_credit_card/icons/mastercard.png": "7e386dc6c169e7164bd6f88bffb733c7",
"assets/packages/flutter_credit_card/icons/rupay.png": "a10fbeeae8d386ee3623e6160133b8a8",
"assets/packages/flutter_credit_card/icons/unionpay.png": "87176915b4abdb3fcc138d23e4c8a58a",
"assets/packages/flutter_credit_card/icons/visa.png": "f6301ad368219611958eff9bb815abfe",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"auth.html": "c9198ada1aa92300ea76658b72fd344b",
"canvaskit/canvaskit.js": "dd5b7e38ac853fcf41faa69cf49aa175",
"canvaskit/canvaskit.wasm": "6e7859012ffcf1d482a8bbc473b8171f",
"canvaskit/chromium/canvaskit.js": "36d162e8f857ceeacbf01ed75a382f56",
"canvaskit/chromium/canvaskit.wasm": "b3fabff5b6c1cb4d4e81f4551eba9ba2",
"canvaskit/skwasm.js": "5256dd3e40ec9fe1fc9faa51a116bcfd",
"canvaskit/skwasm.wasm": "4ca73baf420612f1657d5b2be4b7467d",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "7a00fc9edf99c7623c51b5f63e676a95",
"flutter.js": "a96e4cac3d2da39d86bf871613180e7b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b371ca97b1224ce33afedb129413188e",
"/": "7b6abe3c415e7ab3ba8e888074093615",
"main.dart.js": "a3312768b2458e4790a897b80c0e71da",
"manifest.json": "071e4a0753903aa0a1b22e293aebb9b4",
"UnityLibrary/Build/UnityLibrary.data": "3cafb471b9e4d2a5856668e84c7a619f",
"UnityLibrary/Build/UnityLibrary.framework.js": "ceb669a4270938829bcddd11fe7e8f1f",
"UnityLibrary/Build/UnityLibrary.loader.js": "994b982bded056bd905895cd517202da",
"UnityLibrary/Build/UnityLibrary.wasm": "730a17fa8e964e6a61b19b5dbaf5bb6e",
"UnityLibrary/index.html": "7b6abe3c415e7ab3ba8e888074093615",
"UnityLibrary/StreamingAssets/UnityServicesProjectConfiguration.json": "e48103a6f8e73d7839d45117951916de",
"UnityLibrary/TemplateData/favicon.ico": "f04ae07ad1b634a4152d2c8175134c56",
"UnityLibrary/TemplateData/fullscreen-button.png": "489a5a9723567d8368c9810cde3dc098",
"UnityLibrary/TemplateData/MemoryProfiler.png": "90178b1c01bd4c66a21b9f2866091783",
"UnityLibrary/TemplateData/progress-bar-empty-dark.png": "781ae0583f8c2398925ecedfa04b62df",
"UnityLibrary/TemplateData/progress-bar-empty-light.png": "4412cb4b67a2ae33b3e99cccf8da54c9",
"UnityLibrary/TemplateData/progress-bar-full-dark.png": "99949a10dbeffcdf39821336aa11b3e0",
"UnityLibrary/TemplateData/progress-bar-full-light.png": "9524d4bf7c6e05b2aa33d1a330491b24",
"UnityLibrary/TemplateData/style.css": "1981b5d803ea85e3a43d1adcb046b0ad",
"UnityLibrary/TemplateData/unity-logo-dark.png": "5f00fa907e7c80061485fc64b62ca192",
"UnityLibrary/TemplateData/unity-logo-light.png": "daf8545f18a102b4fa8f693681c2ffe0",
"UnityLibrary/TemplateData/webgl-logo.png": "0c09503c39e9a26675e5f56d82f061b3",
"UnityLibrary/TemplateData/webmemd-icon.png": "e409a6f1c955c2babb36cd2153d418b5",
"version.json": "0ea410cab75b39fe45c4636f2aaf6001"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

const dict =
  `لوريم ايبسوم دولار سيت أميت كونسيكتيتور أدايبا يسكينج أليايتسيت دو أيوسمود

أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا  يوت انيم أد مينيم فينايمكيواس نوستريد

أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات ديواس

أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت

نيولا باراياتيور أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت سيونت ان كيولبا

كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم`.split(' ')

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min

export default function Lorem(n) {
  const words = []
  for (let index = 0; index < n; index++) {
    const r = random(0, dict.length - 1)
    words.push(dict[r])
  }

  return words.join(' ')
}
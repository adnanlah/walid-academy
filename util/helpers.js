const dict =
  `لوريم ايبسوم دولار سيت أميت كونسيكتيتور أدايبا يسكينج أليايتسيت دو أيوسمود

أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا  يوت انيم أد مينيم فينايمكيواس نوستريد

أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات ديواس

أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت

نيولا باراياتيور أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت سيونت ان كيولبا

كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم`.split(' ')

const nextId = array =>
  array[array.length - 1] ? array[array.length - 1].id + 1 : 0

/**
 * Returns a random number between min (inclusive) and max (inclusive)
 */
const random = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const lorem = n => {
  const words = []
  for (let index = 0; index < n; index++) {
    const r = random(0, dict.length - 1)
    words.push(dict[r])
  }

  return words.join(' ')
}

const shuffleArray = arr => {
  const newArr = arr.slice()
  for (let i = newArr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1))
    ;[newArr[i], newArr[rand]] = [newArr[rand], newArr[i]]
  }
  return newArr
}

const generate = (num, func) => {
  return [...Array(num)].map((_, index) => {
    return func(index)
  })
}

const mergeByProp = (target, source, prop) => {
  source.forEach(sourceElement => {
    let targetElement = target.find(targetElement => {
      return sourceElement[prop] === targetElement[prop]
    })
    targetElement
      ? Object.assign(targetElement, sourceElement)
      : target.push(sourceElement)
  })
}

export {random, lorem, nextId, shuffleArray, generate, mergeByProp}

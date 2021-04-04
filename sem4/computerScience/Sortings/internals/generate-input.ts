import { random } from '../../utils'
import fs from 'fs'
import path from 'path'

const count = Number(process.argv[2]) || 10

const array = []
for (let i = 0; i < count; i++) {
	array.push(random(1, 100))
}

fs.writeFileSync(path.join(__dirname, `./input/input-${count}.txt`), array.join(','))

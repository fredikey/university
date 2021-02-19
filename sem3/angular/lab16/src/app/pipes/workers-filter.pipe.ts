import { Pipe, PipeTransform } from '@angular/core';
import {IWorker} from '../lib'

@Pipe({
  name: 'workersFilter'
})
export class WorkersFilterPipe implements PipeTransform {

  transform(list: IWorker[], searchString: string) {
    if (searchString.trim() === '') return list

    const [name, surname] = searchString.split(' ')
    const resName = name.trim().toLowerCase()
    const resSurname = !surname ? '' : surname.trim().toLowerCase()

    return list.filter(item => {
      const isNameMatch = (item.name.toLowerCase()).includes(resName)
      const isSurnameMatch = (item.surname.toLowerCase()).includes(resSurname)
      if (resName === '') {
        return isSurnameMatch
      } else if (resSurname === '') {
        return isNameMatch
      } else {
        return isNameMatch && isSurnameMatch
      }
    })
  }

}

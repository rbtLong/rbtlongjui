import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  constructor() { }

  public static fieldsToJson(obj, arrFieldNames, onFailNullField=true){
    const _obj = Object.assign({}, obj);

    for(let i=0; i<arrFieldNames.length; ++i){
      const field = arrFieldNames[i];

      if(!_obj.hasOwnProperty(field)) {
        console.error('no field name found', field, obj);
        continue;
      }

      try {
        _obj[field] = JSON.parse(_obj[field]);
      } catch (e) {
        if(onFailNullField)
          obj[field] = null;
      }
    }

    return _obj;
  }

  public static arrFieldsToJson(arrObj, arrFieldNames) {
    return arrObj.map(itm => HelpersService.fieldsToJson(itm, arrFieldNames));
  }

}

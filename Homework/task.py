
#from collections.abc import MutableMapping

file_data = '''{"timestamp": "2022-01-14T00:12:21.000", "Field1": 10, "Field_Doc": {"f1": 0}}
{"timestamp": "2022-01-18T00:15:51.000", "Field_Doc": {"f1": 0, "f2": 1.7 }}'''

import json

# --- functions ---

def flatten_dict(data, prefix=""):
    
    result = {}

    for key, value in data.items():
        
        if prefix:
           key = prefix + "." + key
        
        if isinstance(value, dict):
            result.update( flatten_dict(value, key) )
        else:
            result[key] = value
            #result.update( {key: value} )
            
    return result

# --- main ---

#file_obj = open("filename")

import io
file_obj = io.BytesIO(file_data)  # emulate file in memory

for line in file_obj:
    data = json.loads(line)
    print('before:', data)
    
   # flex = "saket"
  # data = flatten( data, flex)
    data = flatten_dict(data, "after")
    print('after :', data)
    
    print('---')
    
    for key, value in data.items():
        with open(key + '.column', "a") as f:
            f.write(str(value) + "\n")
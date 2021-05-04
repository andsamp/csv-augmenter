# csv-augmenter
Read in a CSV, futz around with the data, write a new csv

## cli options
* `--help` - displays help
* `--config` - path of config file
   * *Default:* `./config.json`
* `--input` - path of the input file
  * *Alias:* `-i`
* `--output` - path to the output file
  * *Alias:* `-o`
* `--processors` - list of processors to run the data through
  * *Alias:* `-p`
  

## config
### `read`
* `file` - the file that should be parsed
* `headers`
  * `false` - there is no header row, 
  * `Array[String]` - This array will be used as the headers for the parsed file
* `skipLines` - specifies the number of lines at the top of the file. Useful if specifying a headers array to use over the existing headers row
### `write`
* `file` - the output file that would be written
* `headerMap` - object that maps the JSON keys to pretty names

### Example

```json
{
  "read": {
    "file": "/home/andsamp/Downloads/input-1.csv",
    "headers": [
      "first_name",
      "last_name",
      "date_of_birth"
    ],
    "skipLines": 1
  },
  "write": {
    "file": "/home/andsamp/Documents/output.csv",
    "headerMappings": [
      { "id": "firstName", "title": "First Name" },
      { "id": "lastName", "title": "Last Name" },
      { "id": "dob", "title": "Date of Birth" }
    ]
  }
}
```

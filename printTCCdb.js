ObjC.import('sqlite3');
function print_tccdb(context) {
  var err;
  var filename = ""
  var ppDb = Ref();

  // Change filename var based on params
  switch(context) {
    case 'root':
      filename = $('/Library/Application\ Support/com.apple.TCC/TCC.db').stringByStandardizingPath.js;
      break;
    case 'currUser':
      filename = $('/Users/' + $.NSUserName().js + '/Library/Application\ Support/com.apple.TCC/TCC.db').stringByStandardizingPath.js;
      break;
    default:
      filename = $('/Users/' + context + '/Library/Application\ Support/com.apple.TCC/TCC.db').stringByStandardizingPath.js;
  }

  err = $.sqlite3_open(filename, ppDb)

  var db = ppDb[0]
  if(err != $.SQLITE_OK) throw new Error($.sqlite3_errmsg(db))


  sql = 'select * from access'
  ppStmt = Ref()
  err = $.sqlite3_prepare(db, sql, -1, ppStmt, Ref())
  if(err != $.SQLITE_OK) throw new Error($.sqlite3_errmsg(db))
  pStmt = ppStmt[0]
  var output = "**** TCC.db at " + filename + " ****\n"
  try {
    while ((err = $.sqlite3_step(pStmt)) == $.SQLITE_ROW) {
      output += $.sqlite3_column_text(pStmt, 0) + "  |  " + $.sqlite3_column_text(pStmt, 1) +
        "  |  " + $.sqlite3_column_text(pStmt, 2) + "  |  " + $.sqlite3_column_text(pStmt, 3) +
        "  |  " + $.sqlite3_column_text(pStmt, 4) + "  |\n";
    }
    return output
  }
    catch(error){
      return error.toString()
    }
    finally {
      err = $.sqlite3_finalize(pStmt)
      err = $.sqlite3_close(db)
      if(err != $.SQLITE_OK) throw new Error($.sqlite3_errmsg(db))
    }
}

// print_tccdb('root')
//print_tccdb('currUser')
//print_tccdb('CarlosSpiceyWiener')

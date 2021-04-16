ObjC.import('sqlite3');

function print_tccdb() {
  var err;
  var filename = $('/Library/Application\ Support/com.apple.TCC/TCC.db').stringByStandardizingPath.js
  var ppDb = Ref();
  err = $.sqlite3_open(filename, ppDb)

  var db = ppDb[0]
  if(err != $.SQLITE_OK) throw new Error($.sqlite3_errmsg(db))


  sql = 'select * from access'
  ppStmt = Ref()
  err = $.sqlite3_prepare(db, sql, -1, ppStmt, Ref())
  if(err != $.SQLITE_OK) throw new Error($.sqlite3_errmsg(db))
  pStmt = ppStmt[0]
  var output = ""
  try {
    while ((err = $.sqlite3_step(pStmt)) == $.SQLITE_ROW) {
      output += $.sqlite3_column_text(pStmt, 0) + "  |  " + $.sqlite3_column_text(pStmt, 1) + "\n"
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

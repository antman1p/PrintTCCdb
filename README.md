# PrintTCCdb
JXA script for Mythic that prints the TCC.db\
Blog Post: https://antman1p-30185.medium.com/who-has-full-disk-access-12a523723d30
## Usage:
1. In Mythic, use `jsimport` and upload printTCCdb.js
    -  [Apfell Agent jsimport source code](https://github.com/MythicAgents/apfell/blob/master/Payload_Type/apfell/agent_code/jsimport.js)
3. Use `jsimport_call{"command":"print_tccdb()"}` with one of 3 paramerters
    1.  root - `jsimport_call{"command":"print_tccdb('root')"}` - Lists the contents of the root TCC.db `/Library/Application Support/com.apple.TCC/TCC.db`
    2.  currUser - `jsimport_call{"command":"print_tccdb('currUser')"}` - Lists the contents of the current user's TCC.db `~/Library/Application Support/com.apple.TCC/TCC.db`
    3.  A specified User - `jsimport_call{"command":"print_tccdb('CarlosSpiceyWiener')"}` - Lists the contents of a specified user's TCC.db `/Users/CarlosSpiceyWiener/Library/Application Support/com.apple.TCC/TCC.db`
### The TCC.db will print to the Mythic UI
![alt text](https://github.com/antman1p/PrintTCCdb/blob/main/mythicPrintTCCdb.png?raw=true)

        
    const BASE_URL = "https://api.spotify.com/v1/search?"
    // let QUERY = "weezer"
    // const FETCH_URL = BASE_URL + 'q=' + QUERY + '&type=album&limit=20';
    const FETCH_URL = "https://api.spotify.com/v1/browse/new-releases"
    let accessToken = 'BQCoOoSlH_Jt86vl5F5SL0PaYTPau8JazZTz_fcFxHkoLBM1PzkS-smb6myJStRq3N0NNZqFSUi9mKkJKoCJ_OFUzZFrrIBp4iQxiR06EEQzjIOcVf-EjQUPpeHyuFC1Xi5oDO8AM48c8ayeXPvYUQAxlMlzf2U&refresh_token=AQBd2xZBJqELT51HBJeiIEoubm3vGsCKK0yMDVEaRZy8CiJEElT3DHfU_3WKTXwomBmgkM6beahl2rEbUMhrVFLZ4PFuErvyUHs6wm2v-ztYkQRBjYnlsyhz8ByWRBr07rU'

    let myOptions = {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + accessToken
        },
        mode: 'cors',
        cache: 'default'
    };

export default myOptions
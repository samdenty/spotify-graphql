import { SpotifyGraphQLClient } from '../../../index';
import * as nock from 'nock';

describe('Resolver : Artist.top_tracks', () => {

  let artistResponse = {"external_urls":{"spotify":"https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"},"followers":{"href":null,"total":3347092},"genres":["dance pop","latin","pop","pop rap"],"href":"https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg","id":"0TnOYISbd1XYRBk9myaseg","images":[{"height":563,"url":"https://i.scdn.co/image/d6955bc790b818df4efb719a863e4d26f0c2522b","width":1000},{"height":360,"url":"https://i.scdn.co/image/ddacbbbe81a45f4564887371a3e4dcd783e9af00","width":640},{"height":113,"url":"https://i.scdn.co/image/919f21bfe1323ef2ed93ba8db0de86a99c14ca0b","width":200},{"height":36,"url":"https://i.scdn.co/image/7cad6a6b158a453db5e411060a0e6deb6568db44","width":64}],"name":"Pitbull","popularity":86,"type":"artist","uri":"spotify:artist:0TnOYISbd1XYRBk9myaseg"};
  let artistTopTracksResponse = {"tracks":[{"album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"},"href":"https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg","id":"0TnOYISbd1XYRBk9myaseg","name":"Pitbull","type":"artist","uri":"spotify:artist:0TnOYISbd1XYRBk9myaseg"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/4EUf4YyNjuXypWY6W5wEDm"},"href":"https://api.spotify.com/v1/albums/4EUf4YyNjuXypWY6W5wEDm","id":"4EUf4YyNjuXypWY6W5wEDm","images":[{"height":640,"url":"https://i.scdn.co/image/81d150a1f2f639b52df9030cae97c43c63dfa976","width":640},{"height":300,"url":"https://i.scdn.co/image/ba818399eeb277dbd1d1b78f17d98f109e87e8fb","width":300},{"height":64,"url":"https://i.scdn.co/image/fad697b998530879c13769592f689a29a98623ff","width":64}],"name":"Globalization","type":"album","uri":"spotify:album:4EUf4YyNjuXypWY6W5wEDm"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"},"href":"https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg","id":"0TnOYISbd1XYRBk9myaseg","name":"Pitbull","type":"artist","uri":"spotify:artist:0TnOYISbd1XYRBk9myaseg"},{"external_urls":{"spotify":"https://open.spotify.com/artist/21E3waRsmPlU7jZsS13rcj"},"href":"https://api.spotify.com/v1/artists/21E3waRsmPlU7jZsS13rcj","id":"21E3waRsmPlU7jZsS13rcj","name":"Ne-Yo","type":"artist","uri":"spotify:artist:21E3waRsmPlU7jZsS13rcj"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":229360,"explicit":true,"external_ids":{"isrc":"USRC11402647"},"external_urls":{"spotify":"https://open.spotify.com/track/2bJvI42r8EF3wxjOuDav4r"},"href":"https://api.spotify.com/v1/tracks/2bJvI42r8EF3wxjOuDav4r","id":"2bJvI42r8EF3wxjOuDav4r","name":"Time of Our Lives","popularity":77,"preview_url":"https://p.scdn.co/mp3-preview/456046f512b8da97b84928f67cf9d8b2594db484?cid=8897482848704f2a8f8d7c79726a70d4","track_number":4,"type":"track","uri":"spotify:track:2bJvI42r8EF3wxjOuDav4r"},{"album":{"album_type":"single","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"},"href":"https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg","id":"0TnOYISbd1XYRBk9myaseg","name":"Pitbull","type":"artist","uri":"spotify:artist:0TnOYISbd1XYRBk9myaseg"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/4NSmDaKvXiNU02sTbpPtmZ"},"href":"https://api.spotify.com/v1/albums/4NSmDaKvXiNU02sTbpPtmZ","id":"4NSmDaKvXiNU02sTbpPtmZ","images":[{"height":640,"url":"https://i.scdn.co/image/fa07a94f9810366a90d65609c72b8b04a2191b62","width":640},{"height":300,"url":"https://i.scdn.co/image/e0376bdcb4984fb8ce21adad4afa5552eecc555d","width":300},{"height":64,"url":"https://i.scdn.co/image/59affef1cf9670a8a80699508929734536953dd9","width":64}],"name":"Greenlight","type":"album","uri":"spotify:album:4NSmDaKvXiNU02sTbpPtmZ"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"},"href":"https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg","id":"0TnOYISbd1XYRBk9myaseg","name":"Pitbull","type":"artist","uri":"spotify:artist:0TnOYISbd1XYRBk9myaseg"},{"external_urls":{"spotify":"https://open.spotify.com/artist/0jnsk9HBra6NMjO2oANoPY"},"href":"https://api.spotify.com/v1/artists/0jnsk9HBra6NMjO2oANoPY","id":"0jnsk9HBra6NMjO2oANoPY","name":"Flo Rida","type":"artist","uri":"spotify:artist:0jnsk9HBra6NMjO2oANoPY"},{"external_urls":{"spotify":"https://open.spotify.com/artist/2iUbk5KhZYZt4CRvWbwb7S"},"href":"https://api.spotify.com/v1/artists/2iUbk5KhZYZt4CRvWbwb7S","id":"2iUbk5KhZYZt4CRvWbwb7S","name":"Lunchmoney Lewis","type":"artist","uri":"spotify:artist:2iUbk5KhZYZt4CRvWbwb7S"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":244173,"explicit":false,"external_ids":{"isrc":"USRC11601270"},"external_urls":{"spotify":"https://open.spotify.com/track/2q95XoeFGixx8b5LNF6Ey1"},"href":"https://api.spotify.com/v1/tracks/2q95XoeFGixx8b5LNF6Ey1","id":"2q95XoeFGixx8b5LNF6Ey1","name":"Greenlight","popularity":75,"preview_url":"https://p.scdn.co/mp3-preview/10f619775a07a0b199e0af2f268671fd08ad3fda?cid=8897482848704f2a8f8d7c79726a70d4","track_number":1,"type":"track","uri":"spotify:track:2q95XoeFGixx8b5LNF6Ey1"},{"album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"},"href":"https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg","id":"0TnOYISbd1XYRBk9myaseg","name":"Pitbull","type":"artist","uri":"spotify:artist:0TnOYISbd1XYRBk9myaseg"}],"available_markets":["AD","AR","AT","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/2F7tejLHzTqFq2XLol9ZGy"},"href":"https://api.spotify.com/v1/albums/2F7tejLHzTqFq2XLol9ZGy","id":"2F7tejLHzTqFq2XLol9ZGy","images":[{"height":636,"url":"https://i.scdn.co/image/881fedd75a3c0b6de327ff10aebe4e3866463bd3","width":640},{"height":298,"url":"https://i.scdn.co/image/73de5535c17a2d03586dae316d480e04215c361a","width":300},{"height":64,"url":"https://i.scdn.co/image/480379736d555fb862e81cd8bab2325b9f1f1da7","width":64}],"name":"Global Warming: Meltdown (Deluxe Version)","type":"album","uri":"spotify:album:2F7tejLHzTqFq2XLol9ZGy"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"},"href":"https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg","id":"0TnOYISbd1XYRBk9myaseg","name":"Pitbull","type":"artist","uri":"spotify:artist:0TnOYISbd1XYRBk9myaseg"},{"external_urls":{"spotify":"https://open.spotify.com/artist/6LqNN22kT3074XbTVUrhzX"},"href":"https://api.spotify.com/v1/artists/6LqNN22kT3074XbTVUrhzX","id":"6LqNN22kT3074XbTVUrhzX","name":"Kesha","type":"artist","uri":"spotify:artist:6LqNN22kT3074XbTVUrhzX"}],"available_markets":["AD","AR","AT","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":204160,"explicit":false,"external_ids":{"isrc":"USRC11301695"},"external_urls":{"spotify":"https://open.spotify.com/track/3cHyrEgdyYRjgJKSOiOtcS"},"href":"https://api.spotify.com/v1/tracks/3cHyrEgdyYRjgJKSOiOtcS","id":"3cHyrEgdyYRjgJKSOiOtcS","name":"Timber","popularity":72,"preview_url":"https://p.scdn.co/mp3-preview/d26c8392936843a07bb162853093de5bf2eb0011?cid=8897482848704f2a8f8d7c79726a70d4","track_number":13,"type":"track","uri":"spotify:track:3cHyrEgdyYRjgJKSOiOtcS"},{"album":{"album_type":"compilation","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"},"href":"https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of","id":"0LyfQWJT6nXafLPZqxe9Of","name":"Various Artists","type":"artist","uri":"spotify:artist:0LyfQWJT6nXafLPZqxe9Of"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/717UG2du6utFe7CdmpuUe3"},"href":"https://api.spotify.com/v1/albums/717UG2du6utFe7CdmpuUe3","id":"717UG2du6utFe7CdmpuUe3","images":[{"height":640,"url":"https://i.scdn.co/image/94248808b0ed4a8073073211e4cd013df7080c49","width":640},{"height":300,"url":"https://i.scdn.co/image/e0f5d9cc24134f60cc9356d3caa6586beb0ffb9c","width":300},{"height":64,"url":"https://i.scdn.co/image/d1f44d97a32935315791798defa5036df5f1cd04","width":64}],"name":"Reggaeton!","type":"album","uri":"spotify:album:717UG2du6utFe7CdmpuUe3"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/4VMYDCV2IEDYJArk749S6m"},"href":"https://api.spotify.com/v1/artists/4VMYDCV2IEDYJArk749S6m","id":"4VMYDCV2IEDYJArk749S6m","name":"Daddy Yankee","type":"artist","uri":"spotify:artist:4VMYDCV2IEDYJArk749S6m"},{"external_urls":{"spotify":"https://open.spotify.com/artist/7sfl4Xt5KmfyDs2T3SVSMK"},"href":"https://api.spotify.com/v1/artists/7sfl4Xt5KmfyDs2T3SVSMK","id":"7sfl4Xt5KmfyDs2T3SVSMK","name":"Lil Jon","type":"artist","uri":"spotify:artist:7sfl4Xt5KmfyDs2T3SVSMK"},{"external_urls":{"spotify":"https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"},"href":"https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg","id":"0TnOYISbd1XYRBk9myaseg","name":"Pitbull","type":"artist","uri":"spotify:artist:0TnOYISbd1XYRBk9myaseg"},{"external_urls":{"spotify":"https://open.spotify.com/artist/3P4VNQLuN1qQQnL8rMaIkL"},"href":"https://api.spotify.com/v1/artists/3P4VNQLuN1qQQnL8rMaIkL","id":"3P4VNQLuN1qQQnL8rMaIkL","name":"Noriega","type":"artist","uri":"spotify:artist:3P4VNQLuN1qQQnL8rMaIkL"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":282706,"explicit":false,"external_ids":{"isrc":"ITF250500068"},"external_urls":{"spotify":"https://open.spotify.com/track/69gRFGOWY9OMpFJgFol1u0"},"href":"https://api.spotify.com/v1/tracks/69gRFGOWY9OMpFJgFol1u0","id":"69gRFGOWY9OMpFJgFol1u0","name":"Gasolina - DJ Buddah Remix","popularity":70,"preview_url":"https://p.scdn.co/mp3-preview/4bdac87857d69b1fec0a174b13e3b9a51cade0a4?cid=8897482848704f2a8f8d7c79726a70d4","track_number":6,"type":"track","uri":"spotify:track:69gRFGOWY9OMpFJgFol1u0"},{"album":{"album_type":"single","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"},"href":"https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg","id":"0TnOYISbd1XYRBk9myaseg","name":"Pitbull","type":"artist","uri":"spotify:artist:0TnOYISbd1XYRBk9myaseg"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/4rHzoNjmyHxM2KTr7orELz"},"href":"https://api.spotify.com/v1/albums/4rHzoNjmyHxM2KTr7orELz","id":"4rHzoNjmyHxM2KTr7orELz","images":[{"height":640,"url":"https://i.scdn.co/image/72765d985d60f5f4c51f9bac833358d561525c14","width":640},{"height":300,"url":"https://i.scdn.co/image/daab46df4256c4f56032e86ecb17932d192b627a","width":300},{"height":64,"url":"https://i.scdn.co/image/8caff95526f5e2f5ea05ec6f1c659f971d92136b","width":64}],"name":"Can't Have","type":"album","uri":"spotify:album:4rHzoNjmyHxM2KTr7orELz"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"},"href":"https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg","id":"0TnOYISbd1XYRBk9myaseg","name":"Pitbull","type":"artist","uri":"spotify:artist:0TnOYISbd1XYRBk9myaseg"},{"external_urls":{"spotify":"https://open.spotify.com/artist/2EwZTE4cjewxoigHD5Y3UF"},"href":"https://api.spotify.com/v1/artists/2EwZTE4cjewxoigHD5Y3UF","id":"2EwZTE4cjewxoigHD5Y3UF","name":"Steven A. Clark","type":"artist","uri":"spotify:artist:2EwZTE4cjewxoigHD5Y3UF"},{"external_urls":{"spotify":"https://open.spotify.com/artist/4HJnsUVBubdKJ2aV0sr48u"},"href":"https://api.spotify.com/v1/artists/4HJnsUVBubdKJ2aV0sr48u","id":"4HJnsUVBubdKJ2aV0sr48u","name":"Ape Drums","type":"artist","uri":"spotify:artist:4HJnsUVBubdKJ2aV0sr48u"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":214904,"explicit":true,"external_ids":{"isrc":"USRC11601312"},"external_urls":{"spotify":"https://open.spotify.com/track/5vNulf3Z6xUrBzGy5hcFgM"},"href":"https://api.spotify.com/v1/tracks/5vNulf3Z6xUrBzGy5hcFgM","id":"5vNulf3Z6xUrBzGy5hcFgM","name":"Can't Have","popularity":70,"preview_url":"https://p.scdn.co/mp3-preview/913e95e835fb32789dedd8e8d70be00ee7daaaf3?cid=8897482848704f2a8f8d7c79726a70d4","track_number":1,"type":"track","uri":"spotify:track:5vNulf3Z6xUrBzGy5hcFgM"},{"album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"},"href":"https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg","id":"0TnOYISbd1XYRBk9myaseg","name":"Pitbull","type":"artist","uri":"spotify:artist:0TnOYISbd1XYRBk9myaseg"}],"available_markets":["AD","AR","AT","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/00zN65JStpVnpJn9ckMsQI"},"href":"https://api.spotify.com/v1/albums/00zN65JStpVnpJn9ckMsQI","id":"00zN65JStpVnpJn9ckMsQI","images":[{"height":636,"url":"https://i.scdn.co/image/cffd10f4474547c3ecd96da3b71649851af1cc21","width":640},{"height":298,"url":"https://i.scdn.co/image/06a0319415a3279e004b46590f0c06ce2906715f","width":300},{"height":64,"url":"https://i.scdn.co/image/a703caca90066d299aec2697e115b314219cdf79","width":64}],"name":"Pitbull Starring In Rebelution","type":"album","uri":"spotify:album:00zN65JStpVnpJn9ckMsQI"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"},"href":"https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg","id":"0TnOYISbd1XYRBk9myaseg","name":"Pitbull","type":"artist","uri":"spotify:artist:0TnOYISbd1XYRBk9myaseg"}],"available_markets":["AD","AR","AT","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":237120,"explicit":false,"external_ids":{"isrc":"USJAY0900144"},"external_urls":{"spotify":"https://open.spotify.com/track/5RzFJd6W40SDTyZkX6xx45"},"href":"https://api.spotify.com/v1/tracks/5RzFJd6W40SDTyZkX6xx45","id":"5RzFJd6W40SDTyZkX6xx45","name":"I Know You Want Me (Calle Ocho)","popularity":69,"preview_url":"https://p.scdn.co/mp3-preview/6f403695269d85830ce4e3aaa9004331595c2269?cid=8897482848704f2a8f8d7c79726a70d4","track_number":3,"type":"track","uri":"spotify:track:5RzFJd6W40SDTyZkX6xx45"},{"album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"},"href":"https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg","id":"0TnOYISbd1XYRBk9myaseg","name":"Pitbull","type":"artist","uri":"spotify:artist:0TnOYISbd1XYRBk9myaseg"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/4rG0MhkU6UojACJxkMHIXB"},"href":"https://api.spotify.com/v1/albums/4rG0MhkU6UojACJxkMHIXB","id":"4rG0MhkU6UojACJxkMHIXB","images":[{"height":636,"url":"https://i.scdn.co/image/8f8245bee4d922f0ab68f0827623e5a57717fced","width":640},{"height":298,"url":"https://i.scdn.co/image/ca773d0f9776dec1769be54603ebbe56748d51fe","width":300},{"height":64,"url":"https://i.scdn.co/image/20e38c821e9d6b97bb2293b1e0baf6dae0a50849","width":64}],"name":"Planet Pit (Deluxe Version)","type":"album","uri":"spotify:album:4rG0MhkU6UojACJxkMHIXB"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"},"href":"https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg","id":"0TnOYISbd1XYRBk9myaseg","name":"Pitbull","type":"artist","uri":"spotify:artist:0TnOYISbd1XYRBk9myaseg"},{"external_urls":{"spotify":"https://open.spotify.com/artist/21E3waRsmPlU7jZsS13rcj"},"href":"https://api.spotify.com/v1/artists/21E3waRsmPlU7jZsS13rcj","id":"21E3waRsmPlU7jZsS13rcj","name":"Ne-Yo","type":"artist","uri":"spotify:artist:21E3waRsmPlU7jZsS13rcj"},{"external_urls":{"spotify":"https://open.spotify.com/artist/4D75GcNG95ebPtNvoNVXhz"},"href":"https://api.spotify.com/v1/artists/4D75GcNG95ebPtNvoNVXhz","id":"4D75GcNG95ebPtNvoNVXhz","name":"Afrojack","type":"artist","uri":"spotify:artist:4D75GcNG95ebPtNvoNVXhz"},{"external_urls":{"spotify":"https://open.spotify.com/artist/1ruutHJcECI7cos2n5TqpO"},"href":"https://api.spotify.com/v1/artists/1ruutHJcECI7cos2n5TqpO","id":"1ruutHJcECI7cos2n5TqpO","name":"Nayer","type":"artist","uri":"spotify:artist:1ruutHJcECI7cos2n5TqpO"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":252306,"explicit":false,"external_ids":{"isrc":"USJAY1100032"},"external_urls":{"spotify":"https://open.spotify.com/track/4QNpBfC0zvjKqPJcyqBy9W"},"href":"https://api.spotify.com/v1/tracks/4QNpBfC0zvjKqPJcyqBy9W","id":"4QNpBfC0zvjKqPJcyqBy9W","name":"Give Me Everything","popularity":68,"preview_url":"https://p.scdn.co/mp3-preview/ca42c116bedd994141b8d697ba7d7cf1b521cb2f?cid=8897482848704f2a8f8d7c79726a70d4","track_number":2,"type":"track","uri":"spotify:track:4QNpBfC0zvjKqPJcyqBy9W"},{"album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"},"href":"https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg","id":"0TnOYISbd1XYRBk9myaseg","name":"Pitbull","type":"artist","uri":"spotify:artist:0TnOYISbd1XYRBk9myaseg"}],"available_markets":["AD","BE","BG","CY","CZ","DK","EE","ES","FI","FR","GB","GR","HU","IE","IS","IT","LT","LU","LV","MC","MT","NL","NO","PL","PT","SE","SK","TR"],"external_urls":{"spotify":"https://open.spotify.com/album/67PTz2RQnuh6fRf1JgxUI7"},"href":"https://api.spotify.com/v1/albums/67PTz2RQnuh6fRf1JgxUI7","id":"67PTz2RQnuh6fRf1JgxUI7","images":[{"height":640,"url":"https://i.scdn.co/image/cc6c9be0e7d92b6779e1ac1346fcd40bf90102ca","width":640},{"height":300,"url":"https://i.scdn.co/image/1204a4b52bede0594311d5f48ee9b6f6546df7de","width":300},{"height":64,"url":"https://i.scdn.co/image/22e7aab55c81274bbcc1eb03df0bbbfe40891c75","width":64}],"name":"Dale","type":"album","uri":"spotify:album:67PTz2RQnuh6fRf1JgxUI7"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"},"href":"https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg","id":"0TnOYISbd1XYRBk9myaseg","name":"Pitbull","type":"artist","uri":"spotify:artist:0TnOYISbd1XYRBk9myaseg"},{"external_urls":{"spotify":"https://open.spotify.com/artist/1noWnd8QFQD9VLxWEeo4Zf"},"href":"https://api.spotify.com/v1/artists/1noWnd8QFQD9VLxWEeo4Zf","id":"1noWnd8QFQD9VLxWEeo4Zf","name":"Don Miguelo","type":"artist","uri":"spotify:artist:1noWnd8QFQD9VLxWEeo4Zf"}],"available_markets":["AD","BE","BG","CY","CZ","DK","EE","ES","FI","FR","GB","GR","HU","IE","IS","IT","LT","LU","LV","MC","MT","NL","NO","PL","PT","SE","SK","TR"],"disc_number":1,"duration_ms":262706,"explicit":false,"external_ids":{"isrc":"USNPW1400156"},"external_urls":{"spotify":"https://open.spotify.com/track/64qRlzwyPOEuUwZvEZpIW7"},"href":"https://api.spotify.com/v1/tracks/64qRlzwyPOEuUwZvEZpIW7","id":"64qRlzwyPOEuUwZvEZpIW7","name":"Como Yo Le Doy - Spanglish Version","popularity":52,"preview_url":"https://p.scdn.co/mp3-preview/06b69f4bf1dda4a3376196cd784ef964878b7f40?cid=8897482848704f2a8f8d7c79726a70d4","track_number":2,"type":"track","uri":"spotify:track:64qRlzwyPOEuUwZvEZpIW7"},{"album":{"album_type":"single","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"},"href":"https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg","id":"0TnOYISbd1XYRBk9myaseg","name":"Pitbull","type":"artist","uri":"spotify:artist:0TnOYISbd1XYRBk9myaseg"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/2K1JxMX1zbA9bNi6y1v16t"},"href":"https://api.spotify.com/v1/albums/2K1JxMX1zbA9bNi6y1v16t","id":"2K1JxMX1zbA9bNi6y1v16t","images":[{"height":640,"url":"https://i.scdn.co/image/b781de3d8579bd66da7a860c29d8331c13d0516b","width":640},{"height":300,"url":"https://i.scdn.co/image/da1fdbcbfdddb5e50dd5713ccd6c5e4d6b4a847a","width":300},{"height":64,"url":"https://i.scdn.co/image/64afdc93c3e08f9466e4302310d5c3f6f10fe1a2","width":64}],"name":"Messin' Around (w/ Enrique Iglesias)","type":"album","uri":"spotify:album:2K1JxMX1zbA9bNi6y1v16t"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"},"href":"https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg","id":"0TnOYISbd1XYRBk9myaseg","name":"Pitbull","type":"artist","uri":"spotify:artist:0TnOYISbd1XYRBk9myaseg"},{"external_urls":{"spotify":"https://open.spotify.com/artist/7qG3b048QCHVRO5Pv1T5lw"},"href":"https://api.spotify.com/v1/artists/7qG3b048QCHVRO5Pv1T5lw","id":"7qG3b048QCHVRO5Pv1T5lw","name":"Enrique Iglesias","type":"artist","uri":"spotify:artist:7qG3b048QCHVRO5Pv1T5lw"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":223265,"explicit":false,"external_ids":{"isrc":"USRC11600565"},"external_urls":{"spotify":"https://open.spotify.com/track/2moTY9zKAZkRsODU4TUXY6"},"href":"https://api.spotify.com/v1/tracks/2moTY9zKAZkRsODU4TUXY6","id":"2moTY9zKAZkRsODU4TUXY6","name":"Messin' Around","popularity":67,"preview_url":"https://p.scdn.co/mp3-preview/3a990643597dfd240cec910146f63f18bf2d180a?cid=8897482848704f2a8f8d7c79726a70d4","track_number":1,"type":"track","uri":"spotify:track:2moTY9zKAZkRsODU4TUXY6"},{"album":{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"},"href":"https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg","id":"0TnOYISbd1XYRBk9myaseg","name":"Pitbull","type":"artist","uri":"spotify:artist:0TnOYISbd1XYRBk9myaseg"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/4EUf4YyNjuXypWY6W5wEDm"},"href":"https://api.spotify.com/v1/albums/4EUf4YyNjuXypWY6W5wEDm","id":"4EUf4YyNjuXypWY6W5wEDm","images":[{"height":640,"url":"https://i.scdn.co/image/81d150a1f2f639b52df9030cae97c43c63dfa976","width":640},{"height":300,"url":"https://i.scdn.co/image/ba818399eeb277dbd1d1b78f17d98f109e87e8fb","width":300},{"height":64,"url":"https://i.scdn.co/image/fad697b998530879c13769592f689a29a98623ff","width":64}],"name":"Globalization","type":"album","uri":"spotify:album:4EUf4YyNjuXypWY6W5wEDm"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"},"href":"https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg","id":"0TnOYISbd1XYRBk9myaseg","name":"Pitbull","type":"artist","uri":"spotify:artist:0TnOYISbd1XYRBk9myaseg"},{"external_urls":{"spotify":"https://open.spotify.com/artist/02vdR0APmv7kuQA2HUlA92"},"href":"https://api.spotify.com/v1/artists/02vdR0APmv7kuQA2HUlA92","id":"02vdR0APmv7kuQA2HUlA92","name":"John Ryan","type":"artist","uri":"spotify:artist:02vdR0APmv7kuQA2HUlA92"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IS","IT","JP","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","SE","SG","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":236200,"explicit":false,"external_ids":{"isrc":"USRC11401783"},"external_urls":{"spotify":"https://open.spotify.com/track/4Y7XAxTANhu3lmnLAzhWJW"},"href":"https://api.spotify.com/v1/tracks/4Y7XAxTANhu3lmnLAzhWJW","id":"4Y7XAxTANhu3lmnLAzhWJW","name":"Fireball","popularity":64,"preview_url":"https://p.scdn.co/mp3-preview/4f2949aea7c9b2a77a79c297fe67aa73793a568c?cid=8897482848704f2a8f8d7c79726a70d4","track_number":3,"type":"track","uri":"spotify:track:4Y7XAxTANhu3lmnLAzhWJW"}]};

  nock.disableNetConnect();

  let client = SpotifyGraphQLClient({
    clientId: "clientId",
    clientSecret: "clientSecret",
    redirectUri: "http://redirectUri.dev",
    accessToken: "accessToken"
  });


  describe('when fetching an existing Artist', () => {
    let artistRequest, artistTopTracksRequest;
    beforeEach(() => {
      artistRequest = nock('https://api.spotify.com:443')
        .get('/v1/artists/0TnOYISbd1XYRBk9myaseg')
        .reply(200, artistResponse);
      artistTopTracksRequest = nock('https://api.spotify.com:443')
        .get('/v1/artists/0TnOYISbd1XYRBk9myaseg/top-tracks?country=US')
        .reply(200, artistTopTracksResponse);
    });
    afterEach(() =>  {
      nock.cleanAll();
    });

    it('should call promise success callback', (done) => {
      let onSuccess = function (executionResult: any) {
        let data = executionResult.data;
        expect(data.artist.name).toBe('Pitbull')
        expect(data.artist.id).toBe('0TnOYISbd1XYRBk9myaseg')
        expect(data.artist.top_tracks[0].id).toBe('2bJvI42r8EF3wxjOuDav4r')
        expect(!!executionResult.errors).toBeFalsy();
        expect(artistRequest.isDone()).toBeTruthy();
        expect(artistTopTracksRequest.isDone()).toBeTruthy();
        done();
      }

      let onError = () => { throw 'should not be called' };

      client.query(`
        query {
          artist(id: "0TnOYISbd1XYRBk9myaseg") {
            id
            name
            top_tracks {
              id
            }
          }
        }
       `).then(onSuccess).catch(onError);
    });
  });

});
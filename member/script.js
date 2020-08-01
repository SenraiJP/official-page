function getCSVFile() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
    createArray(xhr.responseText);
    };
 
    xhr.open("get", "https://docs.google.com/spreadsheets/d/1c2PWMYsN1YoSxSlvrb3nWV7irQSbWYGZrkjbNNXaUxs/export?format=csv&dit#gid=0", true);
    xhr.send(null);
}
getCSVFile();
 
function createXMLHttpRequest() {
    var XMLhttpObject = null;
    XMLhttpObject = new XMLHttpRequest();
    return XMLhttpObject;
}
 
function createArray(csvData) {
    var tempArray = csvData.split("\n");
    var csvArray = new Array();
    for(var i = 0; i<tempArray.length;i++){
    csvArray[i] = tempArray[i].split(",");
    }
    for(var i = 1; i<tempArray.length;i++){
      const member_wrap = document.getElementById('members');
      var div = document.createElement('div');
      div.className = 'member_data';
      div.id = 'member_data_' + i;
      var member_data_wrap = document.createElement('div');
      member_data_wrap.className = 'member_data_wrap';
      member_data_wrap.id = 'member_data_wrap_' + i;
      const member_data = document.getElementById('member_data');
      const h3 = document.createElement('h3');
      h3.className = 'member_name';
      h3.id = 'member_name_' + i;
      const position_p = document.createElement('p');
      position_p.className = 'member_position';
      position_p.id = 'member_position_' + i;
      const about_p = document.createElement('p');
      about_p.className = 'member_about';
      about_p.id = 'member_about_' + i;
      const links_div = document.createElement('div');
      links_div.className = 'member_links';
      links_div.id = 'member_links_' + i;
      
      member_wrap.appendChild(div);
      div.appendChild(member_data_wrap);
      const member_data_wra = document.getElementById('member_data_wrap_' + i);
      console.log(member_data_wra);
      member_data_wra.appendChild(h3);
      member_data_wra.appendChild(position_p);
      member_data_wra.appendChild(about_p);
      member_data_wra.appendChild(links_div);
      const csv_dataArray = csvArray[i];
      const name = document.getElementById('member_name_' + i);
      const position = document.getElementById('member_position_' + i);
      const about = document.getElementById('member_about_' + i);
      const links = document.getElementById('member_links_' + i);
      
      const human_image = '<img src="' + csv_dataArray[15] + '" alt="' + csv_dataArray[1] + '">';
      div.insertAdjacentHTML('afterbegin', human_image);
      name.innerHTML = csv_dataArray[1];
      position.innerHTML = csv_dataArray[2];
      about.innerHTML = csv_dataArray[3];
      if (csv_dataArray[4]) {
        const twitter_link = '<a href="https://twitter.com/' + csv_dataArray[4] + '" class="icon icon-twitter" target="_blank" rel="noopener noreferrer"></a>';
        links.insertAdjacentHTML('beforeend', twitter_link);
      }
      if (csv_dataArray[5]) {
        const facebook_link = '<a href="https://www.facebook.com/' + csv_dataArray[5] + '" class="icon icon-faccebook" target="_blank" rel="noopener noreferrer"></a>';
        links.insertAdjacentHTML('beforeend', facebook_link);
      }
      if (csv_dataArray[6]) {
        const github_link = '<a href="https://github.com/' + csv_dataArray[6] + '" class="icon icon-github" target="_blank" rel="noopener noreferrer"></a>';
        links.insertAdjacentHTML('beforeend', github_link);
      }
      if (csv_dataArray[7]) {
        const youtube_link = '<a href="https://www.youtube.com/channel/' + csv_dataArray[7] + '" class="icon icon-youtube" target="_blank" rel="noopener noreferrer"></a>';
        links.insertAdjacentHTML('beforeend', youtube_link);
      }
      if (csv_dataArray[8]) {
        const line_link = '<a href="https://lin.ee/' + csv_dataArray[8] + '" class="icon icon-line" target="_blank" rel="noopener noreferrer"></a>';
        links.insertAdjacentHTML('beforeend', line_link);
      }
      if (csv_dataArray[9]) {
        const spotify_link = '<a href="https://open.spotify.com/user/' + csv_dataArray[9] + '" class="icon icon-spotify" target="_blank" rel="noopener noreferrer"></a>';
        links.insertAdjacentHTML('beforeend', spotify_link);
      }
      if (csv_dataArray[10]) {
        const twicas_link = '<a href="https://twitcasting.tv/' + csv_dataArray[10] + '" class="icon icon-twicas" target="_blank" rel="noopener noreferrer"></a>';
        links.insertAdjacentHTML('beforeend', twicas_link);
      }
      if (csv_dataArray[11]) {
        const mirrativ_link = '<a href="https://www.mirrativ.com/user/' + csv_dataArray[11] + '" class="icon icon-mirrativ" target="_blank" rel="noopener noreferrer"></a>';
        links.insertAdjacentHTML('beforeend', mirrativ_link);
      }
      if (csv_dataArray[12]) {
        const nicocnico_link = '<a href="https://www.nicovideo.jp/user/' + csv_dataArray[12] + '" class="icon icon-niconico" target="_blank" rel="noopener noreferrer"></a>';
        links.insertAdjacentHTML('beforeend', nicocnico_link);
      }
      if (csv_dataArray[13]) {
        const website_link = '<a href="' + csv_dataArray[13] + '" class="icon" target="_blank" rel="noopener noreferrer">' + csv_dataArray[14] + '</a>';
        links.insertAdjacentHTML('beforeend', website_link);
      }
    }
}
// 上传文件
function uploadFile() {
  const input = document.createElement('input');
  input.type = 'file';
  input.onchange = function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function () {
      console.log('文件内容：', reader.result);
    };
    reader.readAsText(file);
  };
  input.click();
}
15244800104
19326640143
15314098400
18154743458
17622225990
15827890073
13556052567
16613960755
15516541237
17393633026
18597800006
17568494559
18570176487
18958260087
17309190372
17622332364
18548085706
15893272977
13220919123
18745931014
19607167726
15102394516
15663949795
15915928077
13383917738
18220030401
15979052201
13368163598
13411530645
13810424189
16584859272
18826444342
17364730774
13615438158
14818136664
15880126257
17553151209
18873048532
19200129998
18579214340
18364216949
15915477880
18881085464
19150360903
17649163592
13642108238
15090740303
16686792757
13799200460
18872448996
15136182406
13330212203
16213204173
13510563448
18058553307
15376533870
18308977186
13220984684
17352836741
17286109343
16718805448
18012123712
13239203246
15548095585
15706835573
15002377211
19944023239
19815003096
14881266020
16523273947
19171366200
15522828982
17560484052
15158916243
16219614731
18459987883
17335710185
17271877492
18399568402
18632367743
15755238984
15824863577
18370245773
13476986266
17838304610
15679862222
17504794958
19026406867
15590408180
15732977018
18505132016
18010456847
19961905431
15177017255
16686248523
19612847535
17707650509
15975715325
13741406264
19546128014
// 下载文件
function downloadFile(content, fileName) {
  const a = document.createElement('a');
  const file = new Blob([content], { type: 'text/plain' });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}

// 创建表格
function createTable(rows, columns) {
  const table = document.createElement('table');
  for (let i = 0; i < rows; i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j < columns; j++) {
      const td = document.createElement('td');
      td.innerHTML = `Row ${i + 1}, Col ${j + 1}`;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  return table;
}

// 示例：创建一个3行4列的表格并添加到页面中
const table = createTable(3, 4);
document.body.appendChild(table);

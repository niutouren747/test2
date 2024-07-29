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

const floors = [0, 1, 2, 3, 4, 5, 6];
const sectors = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

for (i in floors) {
  if (floors[i] === 1) {
    const t = document.querySelectorAll(`button.floor${floors[i]}`);
    t.forEach(function (t) {
      t.classList.remove("sectorDOWN");
    });
  } else {
    const t = document.querySelectorAll(`button.floor${floors[i]}`);
    t.forEach(function (t) {
      t.classList.remove("sectorDOWN");
    });
  }
}
function selectBuilding(inp) {
  const building = inp[0] + inp[1];
  const floor = inp[2];

  //사물함 목록 이름 벼경
  theSpan = document.querySelector("span#building-floor");
  let _building = "";
  let _floor = floor + "층";
  if (building === "HN") {
    _building = "형남공학관";
  } else if (building === "IS") {
    _building = "정보과학관";
  } else if (building === "CB") {
    _building = "문화관";
  } else {
    _building = _floor = "";
  }

  theSpan.innerText = `${_building} ${_floor}`;
  document.querySelector("span#userDep1").innerText = "";
  //선택한 층만 표시
  for (i in floors) {
    if (floor == floors[i]) {
      const t = document.querySelectorAll(`button.floor${floors[i]}`);
      t.forEach(function (t) {
        t.classList.remove("floorDOWN");
      });
    } else {
      const t = document.querySelectorAll(`button.floor${floors[i]}`);
      t.forEach(function (t) {
        t.classList.add("floorDOWN");
      });
    }
  }
  //모든 구역 표시
  for (i in sectors) {
    const t = document.querySelectorAll(`button.sector${sectors[i]}`);
    t.forEach(function (t) {
      t.classList.remove("sectorDOWN");
    });
  }
}

function selectSector(inp) {
  //선택한 구역만 표시
  for (i in sectors) {
    if (inp === sectors[i]) {
      const t = document.querySelectorAll(`button.sector${sectors[i]}`);
      t.forEach(function (t) {
        t.classList.remove("sectorDOWN");
      });
    } else {
      const t = document.querySelectorAll(`button.sector${sectors[i]}`);
      t.forEach(function (t) {
        t.classList.add("sectorDOWN");
      });
    }
  }
  sessionStorage.setItem("sector", inp);
}

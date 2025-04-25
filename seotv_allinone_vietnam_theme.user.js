// ==UserScript==cc
// @name         🇻🇳 SEOTV TOOL - Giao Diện Việt Nam Đẹp
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Giao diện Việt Nam hiện đại, icon siêu đẹp cho SEOTV Tool.
// @author       GPT + Bạn
// @match        *://*/*
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_setClipboard
// @updateURL   https://raw.githubusercontent.com/congquoc12/seotv-script/main/seotv_allinone_vietnam_theme.user.js
// @downloadURL https://raw.githubusercontent.com/congquoc12/seotv-script/main/seotv_allinone_vietnam_theme.user.js
// ==/UserScript==

(function () {
  'use strict';

  const modules = {
    "✏️ Đổi từ khóa nhanh": () => {
// ==UserScript==
// @name         Đổi Từ Khóa
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Reload the page if the element with id "traffic-keyword" contains any of the specified keywords
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Danh sách các từ khóa cần kiểm tra
    const keywords = ["ee88", "https://csprochain.net/", "xyz789"];  // Bạn có thể thêm nhiều từ khóa vào đây

    // Hàm kiểm tra nếu từ khóa có mặt trong phần tử
    function checkKeywords() {
        var keywordElement = document.getElementById("trafficmã tự động": () => {
// ==UserScript==
// @name         SEOTV MÃ
// @namespace    Yeumoney Auto
// @version      1.6
// @author       Kashiko Kanda (modified by Gemini)
// @match        https://yeumoney.com/*
// @match        https://www.google.com/search?q=*
// @match        *://*/*
// @run-at       document-end
// @icon         https://apngasm.sourceforge.net/colorcube_mini.png
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener("load", () => {
        setTimeout(() => {
            if (window.location.href.startsWith("https://") || window.location.href.startsWith("http://")) {
                document.documentElement.scrollTop = document.documentElement.scrollHeight;
            }
        }, 1000);

        let intervalId = null; // Biến để lưu ID của interval

        intervalId = setInterval(() => {
            document.querySelectorAll("*").forEach(el => {
                if (el.textContent.includes("VUI LÒNG CLICK VÀO LINK CÁC TRANG BẤT KỲ ĐỂ LẤY MÃ")) {
                    const links = Array.from(document.querySelectorAll("a[href]")).filter(link =>
                        link.href.startsWith(location.origin) && !link.innerHTML.includes("<img") && !link.href.includes("logo")
                    );
                    if (links.length) {
                        setTimeout(() => {
                            const randomLink = links[Math.floor(Math.random() * links.length)];
                            randomLink.click();
                            console.log("Đã click vào link:", randomLink.href);
                            clearInterval(intervalId); // Hủy interval sau khi click thành công
                        }, 300);
                    }
                }
            });
        }, 100);
    });

    window.addEventListener("load", () => {
        setTimeout(() => {
            let codeButtonContainer = Array.from(document.querySelectorAll('img[alt="icon"]'))
                .find(img => img.src === "https://seotrieuview.com/images/button-code.png")?.parentNode;

            let directButtonContainer = Array.from(document.querySelectorAll('img[alt="icon"]'))
                .find(img => img.src === "https://seotrieuview.com/images/button-code-direct.png")?.parentNode;

            if (!codeButtonContainer && directButtonContainer) {
                directButtonContainer.click();
            } else if (codeButtonContainer) {
                codeButtonContainer.click();
                if (directButtonContainer) {
                    setTimeout(() => {
                        directButtonContainer.click();
                    }, 2000); // Đợi 2 giây sau khi click nút đầu tiên
                }
            }
        }, 100);
    });

    function boostPerformance() {
        const script = document.createElement('script');
        script.textContent = `
            (function() {
                window.setTimeout = ((s) => (f, t) => s(f, t && Math.min(1, t)))(setTimeout);
                ["setTimeout", "setInterval"].forEach(m =>
                    window[m] = ((o) => (f, t) => o(f, Math.max(1, t / 30)))(window[m])
                );
            })();
        `;
        document.documentElement.appendChild(script);
    }

    window.addEventListener("load", () => {
        setTimeout(() => {
            boostPerformance();
        }, 1001110);
    });

})();
    },

    "🛡️ Chặn lấy thông tin thiết bị": () => {
// ==UserScript==
// @name         chặnlaytt tbi
// @namespace    http://tampermonkey.net/
// @version      2025-04-13
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Chặn các API lấy thông tin thiết bị
    Object.defineProperty(navigator, 'userAgent', {
        get: function() {
            return undefined;
        }
    });

    Object.defineProperty(navigator, 'platform', {
        get: function() {
            return undefined;
        }
    });

    Object.defineProperty(screen, 'width', {
        get: function() {
            return undefined;
        }
    });

    Object.defineProperty(screen, 'height', {
        get: function() {
            return undefined;
        }
    });

    // Thêm các API khác mà bạn muốn chặn ở đây
})();
    },

    "🔗 Sinh URL từ khóa": () => {
// ==UserScript==
// @name         SEOTV uRL TỪ KHÓA
// @namespace    Yeumoney Auto
// @version      1.5
// @author       Gemini
// @match        https://yeumoney.com/*
// @match        https://www.google.com/search?q=*
// @match        *://*/*
// @run-at       document-end
// @icon         https://apngasm.sourceforge.net/colorcube_mini.png
// ==/UserScript==

(function() {
    'use strict';

    // Lấy targetURLs từ localStorage (nếu có, nếu không thì sử dụng mặc định)
    let targetURLs = JSON.parse(localStorage.getItem('targetURLs')) || [
        "https://mightilymeatfree.com/",
        "https://thenuaa.com/",
        "https://f168.llc/",
        "https://88aa.best/",
        "https://88aa.best/",
        "https://s666nd.com/nhacaiuytin6/",
        "https://nhacaiuytin.condos/",
        "https://s666nd.com/qq88-2/",
        "https://s666nd.com/f168-1/"
    ];

    // Biến trạng thái để kiểm tra xem thông báo "Không tìm thấy URL" đã được gửi hay chưa
    let hasNotifiedNoURL = false;

    // Hàm cập nhật URL
    function updateURLs(newURL) {
        // Kiểm tra nếu URL mới đã tồn tại trong danh sách hoặc URL không hợp lệ
        if (!newURL || targetURLs.includes(newURL)) {
            console.log("URL không hợp lệ hoặc đã tồn tại.");
            return; // Nếu URL không hợp lệ hoặc đã tồn tại, không làm gì thêm
        }

        targetURLs.push(newURL);
        localStorage.setItem('targetURLs', JSON.stringify(targetURLs));
    }

    if (window.location.hostname === 'yeumoney.com') {
        let checkInterval = setInterval(() => {
            const element = document.querySelector('p#TK1');
            if (element && element.textContent.trim().length > 0) {
                clearInterval(checkInterval);
                window.open(`https://www.google.com/search?q=${encodeURIComponent(element.textContent.trim())}`, "_blank");
                showCountdownTimer();
            }
        }, 100);
    }

    if (window.location.hostname === 'www.google.com' && window.location.pathname === '/search') {
        let pageCounter = 0;
        let observer = new MutationObserver(() => {
            const links = document.querySelectorAll('a[href^="http"]');
            let foundURL = false;

            for (let link of links) {
                if (targetURLs.some(url => link.href.startsWith(url))) {
                    foundURL = true;
                    // Chuyển hướng sau 1 giây nếu tìm thấy URL
                    setTimeout(() => {
                        window.location.href = link.href;
                    }, 1000);
                    observer.disconnect();
                    break;
                }
            }

            pageCounter++;
            if (pageCounter >= 4) {
                observer.disconnect();

                // Nếu không tìm thấy URL và chưa gửi thông báo "Không tìm thấy URL", hiển thị thông báo
                if (!foundURL && !hasNotifiedNoURL) {
                    const searchParams = new URLSearchParams(window.location.search);
                    const searchQuery = searchParams.get('q');
                    const googleSearchLink = `https://www.google.com/search?q=${searchQuery}`;
                    displayNotification(
                        `Không tìm thấy nhiệm vụ với từ khóa: "${searchQuery}"\nLink tìm kiếm: ${googleSearchLink}`,
                        "red"
                    );

                    // Đánh dấu rằng thông báo đã được gửi
                    hasNotifiedNoURL = true;
                }
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });

        function displayNotification(message, color) {
            let notification = document.createElement("div");
            notification.style.position = "fixed";
            notification.style.top = "50%";
            notification.style.left = "50%";
            notification.style.transform = "translate(-50%, -50%)";
            notification.style.background = color;
            notification.style.color = "white";
            notification.style.padding = "20px";
            notification.style.borderRadius = "10px";
            notification.style.textAlign = "center";
            notification.style.fontSize = "16px";
            notification.style.fontWeight = "bold";
            notification.style.zIndex = "9999";
            notification.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
            notification.innerHTML = message;

            document.body.appendChild(notification);
            setTimeout(() => {
                notification.remove();
            }, 1000);
        }
    }

})();

    },

    "🔁 Tải lại từ khóa đã chọn": () => {
// ==UserScript==
// @name         Reload TỪ Khóa CHọn
// @namespace    https://your-namespace.com/
// @version      1.0
// @description  Check the traffic keyword and reload if incorrect, supports multiple texts
// @author       Your Name
// @match        *://*/*
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // Đặt URL và danh sách các chuỗi văn bản cần so sánh
    const validKeywords = [
        "S666",
        "https://thenuaa.com/",
        "https://geronimojones.com/",    // Ví dụ: thêm chuỗi văn bản khác
        "https://travelrows.com/",  // Ví dụ: thêm một URL khác
        "https://88aa.best/",
        "f168",
        "https://mightilymeatfree.com/",
        "https://s666nd.com/nhacaiuytin6/",
        "https://nhacaiuytin.condos/",
        "https://s666nd.com/qq88-2/",
        "https://s666nd.com/f168-1/",
        "https://s666nd.com/f168-2/",
        "https://s666nd.com/nhacaiuytin4/",
        "https://s666nd.com/nhacaiuytin1/"
    ];

    // Hàm kiểm tra nội dung của phần tử có ID traffic-keyword
    function checkKeyword() {
        const keywordElement = document.querySelector('#traffic-keyword');

        // Kiểm tra nếu phần tử tồn tại và so sánh nội dung của nó với các từ khóa hợp lệ
        if (keywordElement) {
            const keywordContent = keywordElement.textContent.trim();
            const isValid = validKeywords.some(validKeyword => keywordContent === validKeyword);

            if (!isValid) {
                console.log("Nội dung không khớp, reload trang...");
                location.reload(); // Nếu nội dung không khớp với bất kỳ giá trị nào, reload lại trang
            } else {
                console.log("Nội dung khớp, không làm gì.");
            }
        }
    }

    // Gọi hàm kiểm tra ngay khi trang load xong
    window.addEventListener('load', checkKeyword);

    // Kiểm tra lại sau mỗi 5 giây
    setInterval(checkKeyword, 1000);

})();

    },

    "📦 Copy mã đang hiển thị": () => {
// ==UserScript==
// @name         COPY MÃ
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  Tự động sao chép đoạn mã và hiển thị thông báo, KHÔNG đóng tab và KHÔNG dán vào tab khác nữa.
// @author       Bạn
// @match        *://*/*
// @grant        GM_setClipboard
// ==/UserScript==

(function () {
    'use strict';

    const SELECTOR = 'input[readonly][style="display: inline-block; height: 35px;"]'; // Chọn các ô input cần sao chép
    let lastCopied = '';  // Biến lưu trữ giá trị đã sao chép
    let hasCopied = false;  // Biến kiểm tra đã sao chép hay chưa

    // Hàm hiển thị thông báo sao chép
    function showCopiedNotification(text) {
        const notification = document.createElement('div');
        notification.textContent = `✅ Đã sao chép: ${text}`;
        Object.assign(notification.style, {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: '#2196f3',
            color: '#fff',
            padding: '15px 30px',
            borderRadius: '8px',
            fontSize: '16px',
            zIndex: 9999,
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
        });
        document.body.appendChild(notification);

        requestAnimationFrame(() => {
            notification.style.opacity = 1;
        });

        setTimeout(() => {
            notification.style.opacity = 0;
            setTimeout(() => notification.remove(), 300);
        }, 2500);
    }

    // Hàm sao chép mã chỉ một lần
    function copyOnce() {
        if (hasCopied) return; // Kiểm tra nếu đã sao chép, không làm gì nữa

        const inputs = document.querySelectorAll(SELECTOR);

        // Lặp qua các ô input để tìm mã mới
        for (let i = 0; i < inputs.length; i++) {
            const inputValue = inputs[i].value.trim();
            if (inputValue && inputValue !== lastCopied) {
                GM_setClipboard(inputValue);  // Sao chép vào clipboard
                console.log('📋 Sao chép từ ô:', inputValue);
                showCopiedNotification(inputValue);
                lastCopied = inputValue;  // Cập nhật giá trị đã sao chép
                hasCopied = true;  // Đánh dấu là đã sao chép
                return;  // Ngừng sao chép sau lần đầu tiên
            }
        }

        console.log('⏳ Đang chờ ô input xuất hiện...');
    }

    // Lắng nghe sự thay đổi DOM để phát hiện ô input mới
    const observer = new MutationObserver(copyOnce);
    observer.observe(document.body, { childList: true, subtree: true });

    // Chạy hàm copy sau khi tải trang xong
    window.onload = function () {
        setTimeout(copyOnce, 500);  // Chạy ngay khi trang load
    };

    console.log('🚀 Script đang chạy: sẽ sao chép khi tìm thấy input phù hợp.');
})();


    },

    "🚀 Mở link và tự đóng nhanh": () => {
// ==UserScript==
// @name         Mở URL trong tab mới khi nhấn nút và tự động đóng sau 1 giây
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Mở URL trong tab mới khi nhấn nút "Mở Link", sau đó đóng tab hiện tại sau 1 giây và mở lại.
// @author       Bạn
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Tạo nút để mở URL
    const openMenuButton = document.createElement('button');
    openMenuButton.innerText = 'Mở Link';
    openMenuButton.style.position = 'fixed';
    openMenuButton.style.left = '0'; // Căn trái
    openMenuButton.style.top = '50%'; // Căn giữa theo chiều dọc
    openMenuButton.style.transform = 'translateY(-50%)'; // Căn chính xác giữa
    openMenuButton.style.padding = '10px 15px';
    openMenuButton.style.backgroundColor = '#2196F3';
    openMenuButton.style.color = 'white';
    openMenuButton.style.border = 'none';
    openMenuButton.style.cursor = 'pointer';
    openMenuButton.style.fontSize = '16px';
    document.body.appendChild(openMenuButton);

    // Mở URL trong tab mới khi nhấn vào nút
    openMenuButton.addEventListener('click', function() {
        // Mở URL trong tab mới
        const newTab = window.open('https://bnote.xyz/notes/GY99PD', '_blank');

        // Mở lại URL trong tab mới sau khi đóng tab cũ
        setTimeout(function() {
            newTab.location.href = 'https://bnote.xyz/notes/GY99PD'; // Mở lại URL
        }, 500); // Delay 2 giây để tab mới có thời gian mở và load URL
    });

})();

    },

    "🌐 Kiểm tra địa chỉ IP": () => {
// ==UserScript==
// @name         check ip
// @namespace    https://your-namespace.com/
// @version      1.0
// @description  Hiển thị địa chỉ IPv4 và IPv6 ở góc trên trái của trang web
// @author       Your Name
// @match        *://*/*
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // Hàm tạo bảng thông báo với địa chỉ IP ở góc trên trái
    function createIPNotification(ipv4, ipv6) {
        const notification = document.createElement("div");
        notification.style.position = "fixed";
        notification.style.top = "10px";
        notification.style.left = "10px";
        notification.style.background = "#333";
        notification.style.color = "white";
        notification.style.padding = "10px 20px";
        notification.style.borderRadius = "5px";
        notification.style.zIndex = "9999";
        notification.style.fontSize = "14px";
        notification.style.fontWeight = "bold";
        notification.style.textAlign = "left";
        notification.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";

        notification.innerHTML = `
            <strong>IPv4:</strong> ${ipv4 || "Không tìm thấy"} <br>
            <strong>IPv6:</strong> ${ipv6 || "Không tìm thấy"}
        `;

        document.body.appendChild(notification);
    }

    // Hàm lấy địa chỉ IPv4
    async function getIPv4() {
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            const data = await response.json();
            return data.ip;
        } catch (error) {
            console.error("Lỗi khi lấy IPv4:", error);
            return null;
        }
    }

    // Hàm lấy địa chỉ IPv6
    async function getIPv6() {
        try {
            const response = await fetch('https://api6.ipify.org?format=json');
            const data = await response.json();
            return data.ip;
        } catch (error) {
            console.error("Lỗi khi lấy IPv6:", error);
            return null;
        }
    }

    // Hàm hiển thị IP và cập nhật thông báo
    async function displayIP() {
        const ipv4 = await getIPv4();
        const ipv6 = await getIPv6();

        createIPNotification(ipv4, ipv6);
    }

    // Gọi hàm displayIP khi trang load xong
    window.addEventListener('load', displayIP);

})();

    },

    "📋 Sao chép từ khóa": () => {

let retries = 10;
function copyTextFromElement() {
  let el = document.getElementById('traffic-keyword');
  if (el && el.textContent.trim()) {
    let text = el.textContent.trim();
    GM_setClipboard(text);
    const toast = document.createElement('div');
    toast.textContent = '📋 Đã sao chép: ' + text;
    toast.style = 'position:fixed;top:20px;right:20px;background:#0f0;color:#000;padding:10px 15px;border-radius:8px;font-size:14px;z-index:99999;';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
  } else if (retries-- > 0) {
    setTimeout(copyTextFromElement, 500);
  } else {
    alert("❌ Không tìm thấy phần tử #traffic-keyword để sao chép.");
  }
}
copyTextFromElement();

    },

  };  

  const panel = document.createElement('div');
  panel.id = 'seotv-menu';
  panel.style = `
    position: fixed;
    top: 80px;
    left: 30px;
    background: linear-gradient(145deg, #1a1a1a, #2c2c2c);
    color: #FFD700;
    padding: 18px;
    border-radius: 16px;
    box-shadow: 0 0 25px rgba(255,0,0,0.4);
    font-family: 'Segoe UI', sans-serif;
    font-size: 14px;
    z-index: 9999;
    min-width: 320px;
    backdrop-filter: blur(12px);
    border: 2px solid red;
    cursor: move;
  `;

  let isDragging = false, offsetX = 0, offsetY = 0;
  panel.addEventListener('mousedown', e => {
    isDragging = true;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
  });
  document.addEventListener('mouseup', () => isDragging = false);
  document.addEventListener('mousemove', e => {
    if (isDragging) {
      panel.style.left = `${e.pageX - offsetX}px`;
      panel.style.top = `${e.pageY - offsetY}px`;
    }
  });

  panel.innerHTML = `<strong style='color:#FFD700;font-size:16px;'>🇻🇳 SEOTV Menu</strong><hr style='border:1px solid #FFD700;'>`;

  for (const name in modules) {
    const toggle = document.createElement('label');
    toggle.style = 'display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;';
    toggle.innerHTML = `
      <span style='color:#fff;text-shadow:0 0 3px red;'>${name}</span>
      <input type='checkbox' ${GM_getValue(name, false) ? 'checked' : ''}>
    `;
    const checkbox = toggle.querySelector('input');
    checkbox.addEventListener('change', () => {
      GM_setValue(name, checkbox.checked);
      if (checkbox.checked) modules[name]();
    });
    if (checkbox.checked) modules[name]();
    panel.appendChild(toggle);
  }

  document.body.appendChild(panel);
})();

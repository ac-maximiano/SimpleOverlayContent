﻿const overlayContent = {
    show: function (id) {
        const container = document.getElementById(id);
        if (!container || !container.classList.contains('overlayable')) return;

        if (document.getElementById(`${id}-overlay`)) return;

        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        overlay.id = `${id}-overlay`;

        const spinner = document.createElement('div');
        spinner.classList.add('spinner');

        overlay.appendChild(spinner);
        container.style.position = 'relative';
        container.appendChild(overlay);

        if (!document.getElementById('overlay-styles')) {
            const style = document.createElement('style');
            style.id = 'overlay-styles';
            style.innerHTML = `
                    .overlay {
                      position: absolute;
                      top: 0;
                      left: 0;
                      width: 100%;
                      height: 100%;
                      background-color: rgba(255, 255, 255, 0.7);
                      z-index: 999;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                    }
                    .spinner {
                      border: 8px solid #f3f3f3;
                      border-top: 8px solid #3498db;
                      border-radius: 50%;
                      width: 60px;
                      height: 60px;
                      animation: spin 1s linear infinite;
                    }
                    @keyframes spin {
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                    }
                  `;
            document.head.appendChild(style);
        }
    },
    hide: function (id) {
        const overlay = document.getElementById(`${id}-overlay`);
        if (overlay) {
            overlay.parentElement.removeChild(overlay);
        }
    }
};

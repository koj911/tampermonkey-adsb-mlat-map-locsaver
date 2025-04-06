// ==UserScript==
// @name         ADS-B Exchange MLAT Map Control with Storage
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  ADS-B Exchange MLAT Mapの地図表示範囲を制御し、ローカルストレージに保存/復元
// @author       You
// @match        https://map.adsbexchange.com/mlat-map/
// @match        https://map.airplanes.live/index.html
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // ローカルストレージから座標とズームレベルを復元
    let targetLat = parseFloat(localStorage.getItem('adsbLat')) || 26.3617; // デフォルト値：沖縄
    let targetLng = parseFloat(localStorage.getItem('adsbLng')) || 128.0124; // デフォルト値：沖縄
    let targetZoom = parseInt(localStorage.getItem('adsbZoom')) || 11; // デフォルト値：11

    // 地図が読み込まれるまで待機
    const waitForMap = setInterval(() => {
        const map = window.map; // map変数の存在を確認
        if (map && map.setView) { // mapオブジェクトとsetViewメソッドの存在を確認
            clearInterval(waitForMap);
            map.setView([targetLat, targetLng], targetZoom); // 地図の表示範囲を設定

            // 地図の移動やズーム変更時にローカルストレージに保存
            map.on('moveend', () => {
                localStorage.setItem('adsbLat', map.getCenter().lat);
                localStorage.setItem('adsbLng', map.getCenter().lng);
            });
            map.on('zoomend', () => {
                localStorage.setItem('adsbZoom', map.getZoom());
            });
        }
    }, 1000); // 1秒ごとに確認
})();

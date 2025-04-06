# tampermonkey-adsb-mlat-map-locsaver.js

## 日本語 (Japanese)

このTampermonkeyスクリプトは、ADS-B ExchangeのMLAT Map（`https://map.adsbexchange.com/mlat-map/`）とAirplanes.live（`https://map.airplanes.live/index.html`）の地図表示範囲を制御し、表示位置（緯度、経度、ズームレベル）をローカルストレージに保存/復元します。

### 機能

* ページ読み込み時に、ローカルストレージに保存された地図の表示位置を復元します。
* 地図の移動やズーム変更時に、現在の表示位置をローカルストレージに保存します。
* ローカルストレージに表示位置が保存されていない場合は、デフォルトの表示位置（沖縄）を使用します。
* `https://map.adsbexchange.com/mlat-map/`と`https://map.airplanes.live/index.html`に対応

### 使い方

1.  Tampermonkeyなどのユーザースクリプトマネージャーをインストールします。
2.  [tampermonkey-adsb-mlat-map-locsaver.js](tampermonkey-adsb-mlat-map-locsaver.js)をダウンロードします。
3.  ダウンロードしたスクリプトをTampermonkeyにインポートします。
4.  `https://map.adsbexchange.com/mlat-map/`あるいは`https://map.airplanes.live/index.html`にアクセスします。
5.  地図を希望の表示範囲に移動/ズームします。
6.  次回ページを開いた際に、前回の表示範囲が復元されます。

### 依存関係

* Tampermonkeyなどのユーザースクリプトマネージャー
* `https://map.adsbexchange.com/mlat-map/`
* `https://map.airplanes.live/index.html`

### インストール

1.  Tampermonkeyなどのユーザースクリプトマネージャーをブラウザにインストールします。
2.  [tampermonkey-adsb-mlat-map-locsaver.js](tampermonkey-adsb-mlat-map-locsaver.js)をダウンロードします。
3.  Tampermonkeyにダウンロードしたスクリプトをインポートします。
4.  `https://map.adsbexchange.com/mlat-map/`あるいは`https://map.airplanes.live/index.html`にアクセスします。

### 注意事項

* ADS-B ExchangeおよびAirplanes.liveのウェブサイトの構造は予告なく変更される可能性があり、スクリプトが正常に動作しなくなる場合があります。
* ローカルストレージに保存されるデータは、ブラウザを閉じても保持されます。
* ローカルストレージに保存できるデータ量には制限があります。
* ユーザーがブラウザのキャッシュやローカルストレージをクリアすると、保存されたデータは削除されます。

### ライセンス

このスクリプトはMITライセンスで公開されています。

---

## English

This Tampermonkey script controls the map display range of ADS-B Exchange MLAT Map (`https://map.adsbexchange.com/mlat-map/`) and Airplanes.live (`https://map.airplanes.live/index.html`), and saves/restores the display position (latitude, longitude, zoom level) to local storage.

### Features

* Restores the map display position saved in local storage when the page is loaded.
* Saves the current display position to local storage when the map is moved or zoomed.
* Uses the default display position (Okinawa) if the display position is not saved in local storage.
* Supports `https://map.adsbexchange.com/mlat-map/` and `https://map.airplanes.live/index.html`.

### Usage

1.  Install a user script manager such as Tampermonkey.
2.  Download [tampermonkey-adsb-mlat-map-locsaver.js](tampermonkey-adsb-mlat-map-locsaver.js).
3.  Import the downloaded script into Tampermonkey.
4.  Access `https://map.adsbexchange.com/mlat-map/` or `https://map.airplanes.live/index.html`.
5.  Move/zoom the map to the desired display range.
6.  The previous display range will be restored the next time you open the page.

### Dependencies

* User script manager such as Tampermonkey
* `https://map.adsbexchange.com/mlat-map/`
* `https://map.airplanes.live/index.html`

### Installation

1.  Install a user script manager such as Tampermonkey in your browser.
2.  Download [tampermonkey-adsb-mlat-map-locsaver.js](tampermonkey-adsb-mlat-map-locsaver.js).
3.  Import the downloaded script into Tampermonkey.
4.  Access `https://map.adsbexchange.com/mlat-map/` or `https://map.airplanes.live/index.html`.

### Notes

* The structure of the ADS-B Exchange and Airplanes.live websites may change without notice, and the script may not work properly.
* Data saved in local storage is retained even when the browser is closed.
* There is a limit to the amount of data that can be saved in local storage.
* Saved data will be deleted if the user clears the browser cache or local storage.

### License

This script is released under the MIT license.

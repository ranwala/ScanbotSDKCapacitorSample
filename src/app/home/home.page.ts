import { Component, OnInit } from '@angular/core';

import {ScanbotSDK, ScanbotSdkConfiguration, InitializationOptions} from 'capacitor-plugin-scanbot-sdk';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() {}
  async ngOnInit() {
    console.log('starting');
      const config: InitializationOptions = {
        loggingEnabled: true,
        licenseKey: '',
        // see further config parameters
    };
    try {
        const result = await ScanbotSDK.initializeSDK(config);
        alert(JSON.stringify(result));
    } catch (e) {
        console.error(e);
    }
  }

  async openDocScannerClick() {
		try {
			const result = await ScanbotSDK.startDocumentScanner({});
			if (result.pages.length > 0) {
				alert(JSON.stringify(result));
			}
		} catch (error) {
			console.error(error);
		}
	}

}

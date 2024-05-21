package com.example;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.dom.client.Element;
import com.google.gwt.user.client.ui.RootPanel;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class App implements EntryPoint {


	/**
	 * This is the entry point method.
	 */
	@Override
	public void onModuleLoad() {
		for (int i = 1; i < 7; i++) {
			try {
				new Ephemeral(i).checkEven();
				print("OK");
			} catch (Exception ex) {
				print("Fail");
			}
		}
	}

	private void print(String s) {
		RootPanel.get("out").getElement().setInnerText(
				RootPanel.get("out").getElement().getInnerText() + " " + s);
	}
}

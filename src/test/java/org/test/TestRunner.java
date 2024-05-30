package org.test;

import org.junit.After;
import org.junit.runner.RunWith;
import org.report.ReportJvm;

import cucumber.api.CucumberOptions;

import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "C:\\Users\\Sai Siddharth\\Desktop\\MavenCucumber\\MavenCucumber\\src\\test\\resources\\Flipkart\\Flipkarts.feature", 
				glue = "org.stepdefinition", 
				monochrome = true, 
				plugin ={"html:HtmlRepo", "json:C:\\Users\\Sai Siddharth\\Desktop\\MavenCucumber\\MavenCucumber\\Json\\JsonReport.json"})

public class TestRunner {

	@After
	public static void reports() {

		ReportJvm.report("C:\\Users\\Sai Siddharth\\Desktop\\MavenCucumber\\MavenCucumber\\Json\\JsonReport.json");
	}

}

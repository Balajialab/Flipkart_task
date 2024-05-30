package org.report;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class ReportJvm {
	
	public static void report(String jsonFilePath) {
		
		
		
		File f = new File("C:\\Users\\Sai Siddharth\\Desktop\\MavenCucumber\\MavenCucumber\\src\\test\\java\\org\\report\\ReportJvm.java");
		
		Configuration c = new Configuration(f, "Flipkart");
		c.addClassifications("Application","Flipkart");
		c.addClassifications("Opertating system","windows 11");
		c.addClassifications("Report","JVM Report");
		
		
		List<String> l = new ArrayList<String>();
		l.add(jsonFilePath);
		
		ReportBuilder r = new ReportBuilder(l, c);
		r.generateReports();
		
		
		
	}
	
	
	
	
	
	
	

}

const data = [
	{
	  "Satellite": "Aryabhata",
	  "Launch Date": "Apr 19, 1975",
	  "Launch Vehicle": "C-1 Intercosmos",
	  "Country": "Russia",
	  "Orbit Type": "leo",
	  "Purpose": "Experimental",
	  "Success": "Success"
	},
	{
	  "Satellite": "Bhaskara-I",
	  "Launch Date": "Jun 07, 1979",
	  "Launch Vehicle": "C-1Intercosmos",
	  "Country": "Russia",
	  "Orbit Type": "LEO",
	  "Purpose": "Earth Observation, Experimental",
	  "Success": "Success"
	},
	{
	  "Satellite": "Rohini Technology Payload (RTP)",
	  "Launch Date": "Aug 10, 1979",
	  "Launch Vehicle": "SLV-3E1",
	  "Country": "India",
	  "Orbit Type": "leo",
	  "Purpose": "Observation",
	  "Success": "Success"
	},
	{
	  "Satellite": "Rohini Satellite RS-1",
	  "Launch Date": "Jul 18, 1980",
	  "Launch Vehicle": "SLV-3E2",
	  "Country": "India",
	  "Orbit Type": "leo",
	  "Purpose": "Observation",
	  "Success": "Success"
	},
	{
	  "Satellite": "Rohini Satellite RS-D1",
	  "Launch Date": "May 31, 1981",
	  "Launch Vehicle": "SLV-3D1",
	  "Country": "India",
	  "Orbit Type": "LEO",
	  "Purpose": "Earth Observation",
	  "Success": "Success"
	},
	{
	  "Satellite": "APPLE",
	  "Launch Date": "Jun 19, 1981",
	  "Launch Vehicle": "Ariane -1(V-3)",
	  "Country": "Europe",
	  "Orbit Type": "GSO",
	  "Purpose": "Communication, Experimental",
	  "Success": "Success"
	},
	{
	  "Satellite": "Bhaskara-II",
	  "Launch Date": "Nov 20, 1981",
	  "Launch Vehicle": "C-1 Intercosmos",
	  "Country": "Russian",
	  "Orbit Type": "LEO",
	  "Purpose": "Earth Observation, Experimental",
	  "Success": "Success"
	},
	{
	  "Satellite": "INSAT-1A",
	  "Launch Date": "Apr 10, 1982",
	  "Launch Vehicle": "Delta",
	  "Country": "US",
	  "Orbit Type": "GSO",
	  "Purpose": "Communication",
	  "Success": "Success"
	},
	{
	  "Satellite": "Rohini Satellite RS-D2",
	  "Launch Date": "Apr 17, 1983",
	  "Launch Vehicle": "SLV-3",
	  "Country": "India",
	  "Orbit Type": "LEO",
	  "Purpose": "Earth Observation",
	  "Success": "Success"
	},
	{
	  "Satellite": "INSAT-1B",
	  "Launch Date": "Aug 30, 1983",
	  "Launch Vehicle": "Shuttle [PAM-D]",
	  "Country": "US",
	  "Orbit Type": "GSO",
	  "Purpose": "Communication",
	  "Success": "Success"
	},
	{
	  "Satellite": "SROSS-1",
	  "Launch Date": "Mar 24, 1987",
	  "Launch Vehicle": "ASLV-D1",
	  "Country": "India",
	  "Orbit Type": "leo",
	  "Purpose": "Experimental",
	  "Success": "Success"
	},
	{
	  "Satellite": "IRS-1A",
	  "Launch Date": "Mar 17, 1988",
	  "Launch Vehicle": "Vostok",
	  "Country": "Russia",
	  "Orbit Type": "SSPO",
	  "Purpose": "Earth Observation",
	  "Success": "Launch Unsuccessful"
	},
	{
	  "Satellite": "SROSS-2",
	  "Launch Date": "Jul 13, 1988",
	  "Launch Vehicle": "ASLV-D2",
	  "Country": "India",
	  "Orbit Type": "leo",
	  "Purpose": "Earth Observation, Experimental",
	  "Success": "Success"
	},
	{
	  "Satellite": "INSAT-1C",
	  "Launch Date": "Jul 22, 1988",
	  "Launch Vehicle": "Ariane-3",
	  "Country": "Europe",
	  "Orbit Type": "GSO",
	  "Purpose": "Communication",
	  "Success": "Success"
	},
	{
	  "Satellite": "INSAT-1D",
	  "Launch Date": "Jun 12, 1990",
	  "Launch Vehicle": "Delta 4925",
	  "Country": "US",
	  "Orbit Type": "GSO",
	  "Purpose": "Communication",
	  "Success": "Success"
	},
	{
	  "Satellite": "IRS-1B",
	  "Launch Date": "Aug 29, 1991",
	  "Launch Vehicle": "Vostok",
	  "Country": "Russia",
	  "Orbit Type": "SSPO",
	  "Purpose": "Earth Observation",
	  "Success": "Success"
	},
	{
	  "Satellite": "SROSS-C",
	  "Launch Date": "May 20, 1992",
	  "Launch Vehicle": "ASLV-D3",
	  "Country": "India",
	  "Orbit Type": "leo",
	  "Purpose": "Experimental",
	  "Success": "Success"
	},
	{
	  "Satellite": "INSAT-2A",
	  "Launch Date": "Jul 10, 1992",
	  "Launch Vehicle": "Ariane-44L H10",
	  "Country": "Europe",
	  "Orbit Type": "GSO",
	  "Purpose": "Communication",
	  "Success": "Success"
	},
	{
	  "Satellite": "INSAT-2B",
	  "Launch Date": "Jul 23, 1993",
	  "Launch Vehicle": "Ariane-44L H10+",
	  "Country": "Europe",
	  "Orbit Type": "GSO",
	  "Purpose": "Communication",
	  "Success": "Success"
	},
	{
	  "Satellite": "IRS-1E",
	  "Launch Date": "Sep 20, 1993",
	  "Launch Vehicle": "PSLV-D1",
	  "Country": "India",
	  "Orbit Type": "LEO",
	  "Purpose": "Earth Observation",
	  "Success": "Success"
	},
	{
	  "Satellite": "SROSS-C2",
	  "Launch Date": "May 04, 1994",
	  "Launch Vehicle": "ASLV-D4",
	  "Country": "India",
	  "Orbit Type": "leo",
	  "Purpose": "Experimental",
	  "Success": "Success"
	},
	{
	  "Satellite": "IRS-P2",
	  "Launch Date": "Oct 15, 1994",
	  "Launch Vehicle": "PSLV-D2",
	  "Country": "India",
	  "Orbit Type": "SSPO",
	  "Purpose": "Earth Observation",
	  "Success": "Success"
	},
	{
	  "Satellite": "INSAT-2C",
	  "Launch Date": "Dec 07, 1995",
	  "Launch Vehicle": "Ariane-44L H10-3",
	  "Country": "Europe",
	  "Orbit Type": "GSO",
	  "Purpose": "Communication",
	  "Success": "Success"
	},
	{
	  "Satellite": "IRS-1C",
	  "Launch Date": "Dec 28, 1995",
	  "Launch Vehicle": "Molniya",
	  "Country": "Russia",
	  "Orbit Type": "SSPO",
	  "Purpose": "Earth Observation",
	  "Success": "Success"
	},
	{
	  "Satellite": "IRS-P3",
	  "Launch Date": "Mar 21, 1996",
	  "Launch Vehicle": "PSLV-D3 / IRS-P3",
	  "Country": "India",
	  "Orbit Type": "SSPO",
	  "Purpose": "Earth Observation",
	  "Success": "Success"
	},
	{
	  "Satellite": "INSAT-2D",
	  "Launch Date": "Jun 04, 1997",
	  "Launch Vehicle": "Ariane-44L H10-3",
	  "Country": "Europe",
	  "Orbit Type": "GSO",
	  "Purpose": "Communication",
	  "Success": "Success"
	},
	{
	  "Satellite": "IRS-1D",
	  "Launch Date": "Sep 29, 1997",
	  "Launch Vehicle": "PSLV-C1 / IRS-1D",
	  "Country": "India",
	  "Orbit Type": "SSPO",
	  "Purpose": "Earth Observation",
	  "Success": "Success"
	},
	{
	  "Satellite": "INSAT-2E",
	  "Launch Date": "Apr 03, 1999",
	  "Launch Vehicle": "Ariane-42P H10-3",
	  "Country": "Europe",
	  "Orbit Type": "GSO",
	  "Purpose": "Communication",
	  "Success": "Success"
	},
	{
	  "Satellite": "Oceansat(IRS-P4)",
	  "Launch Date": "May 26, 1999",
	  "Launch Vehicle": "PSLV-C2/IRS-P4",
	  "Country": "India",
	  "Orbit Type": "SSPO",
	  "Purpose": "Earth Observation",
	  "Success": "Success"
	},
	{
	  "Satellite": "INSAT-3B",
	  "Launch Date": "Mar 22, 2000",
	  "Launch Vehicle": "Ariane-5G",
	  "Country": "Europe",
	  "Orbit Type": "GSO",
	  "Purpose": "Communication",
	  "Success": "Success"
	},
	{
	  "Satellite": "GSAT-1",
	  "Launch Date": "Apr 18, 2001",
	  "Launch Vehicle": "GSLV-D1 / GSAT-1",
	  "Country": "India",
	  "Orbit Type": "GSO",
	  "Purpose": "Communication",
	  "Success": "Success"
	},
	{
	  "Satellite": "The Technology Experiment Satellite (TES)",
	  "Launch Date": "Oct 22, 2001",
	  "Launch Vehicle": "PSLV-C3 / TES",
	  "Country": "India",
	  "Orbit Type": "SSPO",
	  "Purpose": "Earth Observation",
	  "Success": "Success"
	},
	{
	  "Satellite": "INSAT-3C",
	  "Launch Date": "Jan 24, 2002",
	  "Launch Vehicle": "Ariane5-V147",
	  "Country": "Europe",
	  "Orbit Type": "GSO",
	  "Purpose": "Climate & Environment, Communication",
	  "Success": "Success"
	},
	{
	  "Satellite": "KALPANA-1",
	  "Launch Date": "Sep 12, 2002",
	  "Launch Vehicle": "PSLV-C4 /KALPANA-1",
	  "Country": "India",
	  "Orbit Type": "GSO",
	  "Purpose": "Climate & Environment, Communication",
	  "Success": "Success"
	},
	{
	  "Satellite": "INSAT-3A",
	  "Launch Date": "Apr 10, 2003",
	  "Launch Vehicle": "Ariane5-V160",
	  "Country": "Europe",
	  "Orbit Type": "GSO",
	  "Purpose": "Climate & Environment, Communication",
	  "Success": "Success"
	},
	{
	  "Satellite": "GSAT-2",
	  "Launch Date": "May 08, 2003",
	  "Launch Vehicle": "GSLV-D2 / GSAT-2",
	  "Country": "India",
	  "Orbit Type": "GSO",
	  "Purpose": "Communication",
	  "Success": "Success"
	},
	{
	  "Satellite": "INSAT-3E",
	  "Launch Date": "Sep 28, 2003",
	  "Launch Vehicle": "Ariane5-V162",
	  "Country": "Europe",
	  "Orbit Type": "GSO",
	  "Purpose": "Communication",
	  "Success": "Success"
	},
	{
	  "Satellite": "IRS-P6 / RESOURCESAT-1",
	  "Launch Date": "Oct 17, 2003",
	  "Launch Vehicle": "PSLV-C5 /RESOURCESAT-1",
	  "Country": "India",
	  "Orbit Type": "SSPO",
	  "Purpose": "Earth Observation",
	  "Success": "Success"
	},
	{
	  "Satellite": "EDUSAT",
	  "Launch Date": "Sep 20, 2004",
	  "Launch Vehicle": "GSLV-F01 / EDUSAT(GSAT-3)",
	  "Country": "India",
	  "Orbit Type": "GSO",
	  "Purpose": "Communication",
	  "Success": "Success"
	},
	{
	  "Satellite": "HAMSAT",
	  "Launch Date": "May 05, 2005",
	  "Launch Vehicle": "PSLV-C6/CARTOSAT-1/HAMSAT",
	  "Country": "India",
	  "Orbit Type": "SSPO",
	  "Purpose": "Communication",
	  "Success": "Success"
	},
	{
	  "Satellite": "CARTOSAT-1",
	  "Launch Date": "May 05, 2005",
	  "Launch Vehicle": "PSLV-C6/CARTOSAT-1/HAMSAT",
	  "Country": "India",
	  "Orbit Type": "SSPO",
	  "Purpose": "Earth Observation",
	  "Success": "Success"
	},
	{
	  "Satellite": "INSAT-4A",
	  "Launch Date": "Dec 22, 2005",
	  "Launch Vehicle": "Ariane5-V169",
	  "Country": "Europe",
	  "Orbit Type": "GSO",
	  "Purpose": "Communication",
	  "Success": "Success"
	},
	{
	  "Satellite": "INSAT-4C",
	  "Launch Date": "Jul 10, 2006",
	  "Launch Vehicle": "GSLV-F02 / INSAT-4C",
	  "Country": "India",
	  "Orbit Type": "GSO",
	  "Purpose": "Communication",
	  "Success": "Success"
	},
	{
	  "Satellite": "CARTOSAT-2",
	  "Launch Date": "Jan 10, 2007",
	  "Launch Vehicle": "PSLV-C7 / CARTOSAT-2 / SRE-1",
	  "Country": "India",
	  "Orbit Type": "SSPO",
	  "Purpose": "Earth Observation",
	  "Success": "Success"
	},
	{
	  "Satellite": "SRE-1",
	  "Launch Date": "Jan 10, 2007",
	  "Launch Vehicle": "PSLV-C7 / CARTOSAT-2 / SRE-1",
	  "Country": "India",
	  "Orbit Type": "SSPO",
	  "Purpose": "Experimental",
	  "Success": "Success"
	},
	{
	  "Satellite": "INSAT-4B",
	  "Launch Date": "Mar 12, 2007",
	  "Launch Vehicle": "Ariane5",
	  "Country": "Europe",
	  "Orbit Type": "GSO",
	  "Purpose": "Communication",
	  "Success": "Success"
	},
	{
	  "Satellite": "INSAT-4CR",
	  "Launch Date": "Sep 02, 2007",
	  "Launch Vehicle": "GSLV-F04 / INSAT-4CR",
	  "Country": "India",
	  "Orbit Type": "GSO",
	  "Purpose": "Communication",
	  "Success": "Success"
	},
	{
	  "Satellite": "IMS-1",
	  "Launch Date": "Apr 28, 2008",
	  "Launch Vehicle": "PSLV-C9 / CARTOSAT – 2A",
	  "Country": "India",
	  "Orbit Type": "SSPO",
	  "Purpose": "Earth Observation",
	  "Success": "Success"
	},
	{
	  "Satellite": "CARTOSAT – 2A",
	  "Launch Date": "Apr 28, 2008",
	  "Launch Vehicle": "PSLV-C9 / CARTOSAT – 2A",
	  "Country": "India",
	  "Orbit Type": "SSPO",
	  "Purpose": "Earth Observation",
	  "Success": "Launch Unsuccessful"
	},
	{
	  "Satellite": "Chandrayaan-1",
	  "Launch Date": "Oct 22, 2008",
	  "Launch Vehicle": "PSLV-C11",
	  "Country": "India",
	  "Orbit Type": "Lunar",
	  "Purpose": "Planetary Observation",
	  "Success": "Success"
	},
	{
	  "Satellite": "RISAT-2",
	  "Launch Date": "Apr 20, 2009",
	  "Launch Vehicle": "PSLV-C12 / RISAT-2",
	  "Country": "India",
	  "Orbit Type": "SSPO",
	  "Purpose": "Earth Observation",
	  "Success": "Launch Unsuccessful"
	},
	{
	  "Satellite": "Oceansat-2",
	  "Launch Date": "Sep 23, 2009",
	  "Launch Vehicle": "PSLV-C14 / OCEANSAT-2",
	  "Country": "India",
	  "Orbit Type": "SSPO",
	  "Purpose": "Climate & Environment, Earth Observation",
	  "Success": "Success"
	},
	{
	  "Satellite": "GSAT-4",
	  "Launch Date": "Apr 15, 2010",
	  "Launch Vehicle": "GSLV-D3 / GSAT-4",
	  "Country": "India",
	  "Orbit Type": "GSO",
	  "Purpose": "Communication",
	  "Success": "Success"
	},
	{
	  "Satellite": "CARTOSAT-2B",
	  "Launch Date": "Jul 12, 2010",
	  "Launch Vehicle": "PSLV-C15/CARTOSAT-2B",
	  "Country": "India",
	  "Orbit Type": "SSPO",
	  "Purpose": "Earth Observation",
	  "Success": "Success"
	},
	{
	  "Satellite": "GSAT-5P",
	  "Launch Date": "Dec 25, 2010",
	  "Launch Vehicle": "GSLV-F06 / GSAT-5P",
	  "Country": "India",
	  "Orbit Type": "GSO",
	  "Purpose": "Communication",
	  "Success": "Success"
	},
	{
	  "Satellite": "RESOURCESAT-2",
	  "Launch Date": "Apr 20, 2011",
	  "Launch Vehicle": "PSLV-C16/RESOURCESAT-2",
	  "Country": "India",
	  "Orbit Type": "SSPO",
	  "Purpose": "Earth Observation",
	  "Success": "Success"
	},
	{
	  "Satellite": "YOUTHSAT",
	  "Launch Date": "Apr 20, 2011",
	  "Launch Vehicle": "PSLV-C16/RESOURCESAT-2",
	  "Country": "India",
	  "Orbit Type": "SSPO",
	  "Purpose": "Student Satellite",
	  "Success": "Success"
	},
	{
	  "Satellite": "GSAT-8",
	  "Launch Date": "May 21, 2011",
	  "Launch Vehicle": "Ariane-5 VA-202",
	  "Country": "Europe",
	  "Orbit Type": "GEO",
	  "Purpose": "Communication, Navigation",
	  "Success": "Success"
	},
	{
	  "Satellite": "GSAT-12",
	  "Launch Date": "Jul 15, 2011",
	  "Launch Vehicle": "PSLV-C17/GSAT-12",
	  "Country": "India",
	  "Orbit Type": "GSO",
	  "Purpose": "Communication",
	  "Success": "Success"
	},
	{
	  "Satellite": "Megha-Tropiques",
	  "Launch Date": "Oct 12, 2011",
	  "Launch Vehicle": "PSLV-C18/Megha-Tropiques",
	  "Country": "India",
	  "Orbit Type": "SSPO",
	  "Purpose": "Climate & Environment, Earth Observation",
	  "Success": "Success"
	},
	{
	  "Satellite": "RISAT-1",
	  "Launch Date": "Apr 26, 2012",
	  "Launch Vehicle": "PSLV-C19/RISAT-1",
	  "Country": "India",
	  "Orbit Type": "SSPO",
	  "Purpose": "Earth Observation",
	  "Success": "Launch Unsuccessful"
	},
	{
	  "Satellite": "GSAT-10",
	  "Launch Date": "Sep 29, 2012",
	  "Launch Vehicle": "Ariane-5 VA-209",
	  "Country": "Europe",
	  "Orbit Type": "GEO",
	  "Purpose": "Communication, Navigation",
	  "Success": "Success"
	},
	{
	  "Satellite": "SARAL",
	  "Launch Date": "Feb 25, 2013",
	  "Launch Vehicle": "PSLV-C20/SARAL",
	  "Country": "India",
	  "Orbit Type": "SSPO",
	  "Purpose": "Climate & Environment, Earth Observation",
	  "Success": "Success"
	},
	{
	  "Satellite": "IRNSS-1A",
	  "Launch Date": "Jul 01, 2013",
	  "Launch Vehicle": "PSLV-C22/IRNSS-1A",
	  "Country": "India",
	  "Orbit Type": "GSO",
	  "Purpose": "Navigation",
	  "Success": "Success"
	},
	{
	  "Satellite": "INSAT-3D",
	  "Launch Date": "Jul 26, 2013",
	  "Launch Vehicle": "Ariane-5 VA-214",
	  "Country": "Europe",
	  "Orbit Type": "GSO",
	  "Purpose": "Climate & Environment, Disaster Management System",
	  "Success": "Success"
	},
	{
	  "Satellite": "GSAT-7",
	  "Launch Date": "Aug 30, 2013",
	  "Launch Vehicle": "Ariane-5 VA-215",
	  "Country": "Europe",
	  "Orbit Type": "GSO",
	  "Purpose": "Communication",
	  "Success": "Success"
	},
	{
	  "Satellite": "Mars Orbiter Mission Spacecraft",
	  "Launch Date": "Nov 05, 2013",
	  "Launch Vehicle": "PSLV-C25",
	  "Country": "India",
	  "Orbit Type": "Martian",
	  "Purpose": "Planetary Observation",
	  "Success": "Success"
	},
	{
	  "Satellite": "GSAT-14",
	  "Launch Date": "Jan 05, 2014",
	  "Launch Vehicle": "GSLV-D5/GSAT-14",
	  "Country": "India",
	  "Orbit Type": "GSO",
	  "Purpose": "Communication",
	  "Success": "Success"
	},
	{
	  "Satellite": "IRNSS-1B",
	  "Launch Date": "Apr 04, 2014",
	  "Launch Vehicle": "PSLV-C24/IRNSS-1B",
	  "Country": "India",
	  "Orbit Type": "GSO",
	  "Purpose": "Navigation",
	  "Success": "Success"
	},
	{
	  "Satellite": "IRNSS-1C",
	  "Launch Date": "Oct 16, 2014",
	  "Launch Vehicle": "PSLV-C26/IRNSS-1C",
	  "Country": "India",
	  "Orbit Type": "GEO",
	  "Purpose": "Navigation",
	  "Success": "Success"
	},
	{
	  "Satellite": "GSAT-16",
	  "Launch Date": "Dec 07, 2014",
	  "Launch Vehicle": "Ariane-5 VA-221",
	  "Country": "Europe",
	  "Orbit Type": "GSO",
	  "Purpose": "Communication",
	  "Success": "Success"
	},
	{
	  "Satellite": "Crew module Atmospheric Re-entry Experiment (CARE)",
	  "Launch Date": "Dec 18, 2014",
	  "Launch Vehicle": "LVM-3/CARE Mission",
	  "Country": "India",
	  "Orbit Type": "GSO",
	  "Purpose": "Experimental",
	  "Success": "Success"
	},
	{
	  "Satellite": "IRNSS-1D",
	  "Launch Date": "Mar 28, 2015",
	  "Launch Vehicle": "PSLV-C27/IRNSS-1D",
	  "Country": "India",
	  "Orbit Type": "GSO",
	  "Purpose": "Navigation",
	  "Success": "Success"
	},
	{
	  "Satellite": "GSAT-6",
	  "Launch Date": "Aug 27, 2015",
	  "Launch Vehicle": "GSLV-D6",
	  "Country": "India",
	  "Orbit Type": "GTO",
	  "Purpose": "Communication",
	  "Success": "Success"
	},
	{
	  "Satellite": "Astrosat",
	  "Launch Date": "Sep 28, 2015",
	  "Launch Vehicle": "PSLV-C30/AstroSat MISSION",
	  "Country": "India",
	  "Orbit Type": "GSO",
	  "Purpose": "Space Science",
	  "Success": "Success"
	},
	{
	  "Satellite": "GSAT-15",
	  "Launch Date": "Nov 11, 2015",
	  "Launch Vehicle": "Ariane-5 VA-227",
	  "Country": "Europe",
	  "Orbit Type": "GEO",
	  "Purpose": "Communication, Navigation",
	  "Success": "Success"
	},
	{
	  "Satellite": "IRNSS-1E",
	  "Launch Date": "Jan 20, 2016",
	  "Launch Vehicle": "PSLV-C31/IRNSS-1E",
	  "Country": "India",
	  "Orbit Type": "GSO",
	  "Purpose": "Navigation",
	  "Success": "Success"
	},
	{
	  "Satellite": "IRNSS-1F",
	  "Launch Date": "Mar 10, 2016",
	  "Launch Vehicle": "PSLV-C32/IRNSS-1F",
	  "Country": "India",
	  "Orbit Type": "GEO",
	  "Purpose": "Navigation",
	  "Success": "Failed in Orbit"
	},
	{
	  "Satellite": "IRNSS-1G",
	  "Launch Date": "Apr 28, 2016",
	  "Launch Vehicle": "PSLV-C33/IRNSS-1G",
	  "Country": "India",
	  "Orbit Type": "GEO",
	  "Purpose": "Navigation",
	  "Success": "Success"
	},
	{
	  "Satellite": "CARTOSAT-2 Series Satellite",
	  "Launch Date": "Jun 22, 2016",
	  "Launch Vehicle": "PSLV-C34 / CARTOSAT-2 Series Satellite",
	  "Country": "India",
	  "Orbit Type": "SSPO",
	  "Purpose": "Earth Observation",
	  "Success": "Success"
	},
	{
	  "Satellite": "INSAT-3DR",
	  "Launch Date": "Sep 08, 2016",
	  "Launch Vehicle": "GSLV-F05 / INSAT-3DR",
	  "Country": "India",
	  "Orbit Type": "GSO",
	  "Purpose": "Climate & Environment, Disaster Management System",
	  "Success": "Success"
	},
	{
	  "Satellite": "SCATSAT-1",
	  "Launch Date": "Sep 26, 2016",
	  "Launch Vehicle": "PSLV-C35 / SCATSAT-1",
	  "Country": "India",
	  "Orbit Type": "SSPO",
	  "Purpose": "Climate & Environment",
	  "Success": "Success"
	},
	{
	  "Satellite": "GSAT-18",
	  "Launch Date": "Oct 06, 2016",
	  "Launch Vehicle": "Ariane-5 VA-231",
	  "Country": "Europe",
	  "Orbit Type": "GSO",
	  "Purpose": "Communication",
	  "Success": "Success"
	},
	{
	  "Satellite": "RESOURCESAT-2A",
	  "Launch Date": "Dec 07, 2016",
	  "Launch Vehicle": "PSLV-C36 / RESOURCESAT-2A",
	  "Country": "India",
	  "Orbit Type": "SSPO",
	  "Purpose": "Earth Observation",
	  "Success": "Launch Unsuccessful"
	},
	{
	  "Satellite": "Cartosat -2 Series Satellite",
	  "Launch Date": "Feb 15, 2017",
	  "Launch Vehicle": "PSLV-C37 / Cartosat -2 Series Satellite",
	  "Country": "India",
	  "Orbit Type": "SSPO",
	  "Purpose": "Earth Observation",
	  "Success": "Success"
	},
	{
	  "Satellite": "INS-1A",
	  "Launch Date": "Feb 15, 2017",
	  "Launch Vehicle": "PSLV-C37 / Cartosat -2 Series Satellite",
	  "Country": "India",
	  "Orbit Type": "SSPO",
	  "Purpose": "Experimental",
	  "Success": "Success"
	},
	{
	  "Satellite": "INS-1B",
	  "Launch Date": "Feb 15, 2017",
	  "Launch Vehicle": "PSLV-C37 / Cartosat -2 Series Satellite",
	  "Country": "India",
	  "Orbit Type": "SSPO",
	  "Purpose": "Experimental",
	  "Success": "Success"
	},
	{
	  "Satellite": "GSAT-9",
	  "Launch Date": "May 05, 2017",
	  "Launch Vehicle": "GSLV-F09 / GSAT-9",
	  "Country": "India",
	  "Orbit Type": "GSO",
	  "Purpose": "Communication",
	  "Success": "Success"
	},
	{
	  "Satellite": "GSAT-19",
	  "Launch Date": "Jun 05, 2017",
	  "Launch Vehicle": "GSLV Mk III-D1/GSAT-19 Mission",
	  "Country": "India",
	  "Orbit Type": "GSO",
	  "Purpose": "Communication",
	  "Success": "Success"
	},
	{
	  "Satellite": "Cartosat-2 Series Satellite",
	  "Launch Date": "Jun 23, 2017",
	  "Launch Vehicle": "PSLV-C38 / Cartosat-2 Series Satellite",
	  "Country": "India",
	  "Orbit Type": "SSPO",
	  "Purpose": "Earth Observation",
	  "Success": "Partial Failure in Orbit"
	},
	{
	  "Satellite": "GSAT-17",
	  "Launch Date": "Jun 29, 2017",
	  "Launch Vehicle": "Ariane-5 VA-238",
	  "Country": "Europe",
	  "Orbit Type": "GTO",
	  "Purpose": "Communication",
	  "Success": "Launch Unsuccessful"
	},
	{
	  "Satellite": "IRNSS-1H",
	  "Launch Date": "Aug 31, 2017",
	  "Launch Vehicle": "PSLV-C39/IRNSS-1H Mission",
	  "Country": "India",
	  "Orbit Type": "Geo",
	  "Purpose": "Navigation",
	  "Success": "Success"
	},
	{
	  "Satellite": "Cartosat-2 Series Satellite",
	  "Launch Date": "Jan 12, 2018",
	  "Launch Vehicle": "PSLV-C40/Cartosat-2 Series Satellite Mission",
	  "Country": "India",
	  "Orbit Type": "SSPO",
	  "Purpose": "Earth Observation",
	  "Success": "Launch Unsuccessful"
	},
	{
	  "Satellite": "Microsat",
	  "Launch Date": "Jan 12, 2018",
	  "Launch Vehicle": "PSLV-C40/Cartosat-2 Series Satellite Mission",
	  "Country": "India",
	  "Orbit Type": "SSPO",
	  "Purpose": "Experimental",
	  "Success": "Success"
	},
	{
	  "Satellite": "INS-1C",
	  "Launch Date": "Jan 12, 2018",
	  "Launch Vehicle": "PSLV-C40/Cartosat-2 Series Satellite Mission",
	  "Country": "India",
	  "Orbit Type": "SSPO",
	  "Purpose": "Experimental",
	  "Success": "Success"
	},
	{
	  "Satellite": "GSAT-6A",
	  "Launch Date": "Mar 29, 2018",
	  "Launch Vehicle": "GSLV-F08/GSAT-6A Mission",
	  "Country": "India",
	  "Orbit Type": "GSO",
	  "Purpose": "Communication",
	  "Success": "Failed in Orbit"
	},
	{
	  "Satellite": "IRNSS-1I",
	  "Launch Date": "Apr 12, 2018",
	  "Launch Vehicle": "PSLV-C41/IRNSS-1I",
	  "Country": "India",
	  "Orbit Type": "GSO",
	  "Purpose": "Navigation",
	  "Success": "Success"
	},
	{
	  "Satellite": "GSAT-29",
	  "Launch Date": "Nov 14, 2018",
	  "Launch Vehicle": "GSLV Mk III-D2 / GSAT-29 Mission",
	  "Country": "India",
	  "Orbit Type": "GTO",
	  "Purpose": "Communication",
	  "Success": "Success"
	},
	{
	  "Satellite": "HysIS",
	  "Launch Date": "Nov 29, 2018",
	  "Launch Vehicle": "PSLV-C43 / HysIS Mission",
	  "Country": "India",
	  "Orbit Type": "SSPO",
	  "Purpose": "Earth Observation",
	  "Success": "Success"
	},
	{
	  "Satellite": "GSAT-11 Mission",
	  "Launch Date": "Dec 05, 2018",
	  "Launch Vehicle": "Ariane-5 VA-246",
	  "Country": "Europe",
	  "Orbit Type": "GTO",
	  "Purpose": "Communication",
	  "Success": "Success"
	},
	{
	  "Satellite": "GSAT-7A",
	  "Launch Date": "Dec 19, 2018",
	  "Launch Vehicle": "GSLV-F11 / GSAT-7A Mission",
	  "Country": "India",
	  "Orbit Type": "GSO",
	  "Purpose": "Communication",
	  "Success": "Launch Unsuccessful"
	},
	{
	  "Satellite": "Microsat-R",
	  "Launch Date": "Jan 24, 2019",
	  "Launch Vehicle": "PSLV-C44",
	  "Country": "India",
	  "Orbit Type": "SSPO",
	  "Purpose": "Earth Observation",
	  "Success": "Success"
	},
	{
	  "Satellite": "GSAT-31",
	  "Launch Date": "Feb 06, 2019",
	  "Launch Vehicle": "Ariane-5 VA-247",
	  "Country": "Europe",
	  "Orbit Type": "GTO",
	  "Purpose": "Communication",
	  "Success": "Success"
	}
  ]
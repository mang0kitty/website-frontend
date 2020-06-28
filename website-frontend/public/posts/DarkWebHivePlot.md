# Tor Anonymity Network Visualization using D3.js and OnionScan

## Introduction

This visualization explores anonymity on the highly connected Dark Webusing D3.js. Although sites on the darknet offer to protect the privacy of their visitors and owner, administrators can inadvertently leak details that put everyone at risk. Staying anonymous on the so-called dark web is hard and it doesn’t guarantee security.This visualization wants to uncover the true privacy infrastructure of the Tor anonymity network andprovide a tool to understand network propertiesthat threaten the privacy of these services.

This visualization uses OnionScan<sup>1</sup> to scan 8,176 .onion hidden services on the Tor<sup>2</sup> anonymity network and gather various identifying metadata associated with them. The project uses this metadata in various ways within the hive table to explore relationships and patterns between hidden servicesusing identity correlations such asIP addresses, SSH keys, PGP fingerprint keys, related Clearnet sites. Curved links connect related entities. A lot of interesting exploratory work can be done with this data to begin to uncover relationships and patterns regarding privacy preservation and anonymity networks on the Dark Web.

## Visualization Artefact

The visualization can be found [Here](https://darkweb.aideen.dev/index.html) and the project source code at [GitHub](https://github.com/mang0kitty/darkwebVis).

## Visualization Description

This visualization is novel in it's approach in using a hive table to conduct an exploratory analysis of the highly connected and large Tor network.The entities presented in this visualization are hidden services, IP addresses, SSH keys, PGP fingerprint keys and related Clearnet sites. These identities are presented as nodes and are mapped onto their own radially distributed linear axes. I wanted this node-axis mapping to enable easy exploration of the relationships between properties in the network.

Network visualizations are notoriously hard to interpret–their canonical visual form representation has given rise to the moniker “hairball”. Thesetraditional hairball visualizationsaren’t informative andbecause of their dependency on layout algorithms,they can’tbe relied upon to derive meaningful and useful patterns. This can be seen most clearly in a previous visualization I made shown below. It uses similar OnionScan data to that used in this project, along with Gephi and the Python Networkx package.

<div style="text-align:center;padding-top:20px;padding-bottom: 10px;">
	<img src="/img/DarkWebVis/Trad1.png" style="height:300px;width:350px;padding-right:20px;"alt="Traditional large network visualizations">
    <img src="/img/DarkWebVis/Trad2.png" style="height:300px;width:350px;"alt="Traditional large network visualizations">
	<p >Traditional large network visualizations using Networkx and Gephi.</p>
</div>

Conventional network visualizations are not suitable for analysing large networks (Krzywinski, 2012) but can be effective when specific layouts are madewith time and effort. Such cases include the Twitter Social Network Analysis (UMBS ebiquity, 2007) and Mapping the Human “Diseasome” (Bloch & Corum, 2008). Unfortunately,these layouts aren’t effective in general.

I chose the hive plot structure to present my data as it’s excellent at exposing outliers, trends and managing data complexity. The hive plot is based on a meaningful network properties(Krzywinski, 2012) that can rationally visualize large networks with many nodes and edges. It allows me to take my large, complex Tor networkdata and create a scalable visualization for visual analytics. Furthermore, hive plots are perceptually uniform and can be directly compared to other networks.

## Data

The data used in this visualization is produced by running OnionScan against 8,176 hidden services to gather any information that might indicate a privacy vulnerability that could leak the identity of the user of visitor. For each .onion hidden service scanned, OnionScan produces a JSON report for each service. I wrote a Python script that could run this scan and save the JSON filesfor each scan to a folder. The JSON report includes fields that can be used to determine the anonymity of that service. These fields indicatewhether open directories were found, EXIF tags, Server fingerprints, SSH public key fingerprint, FTP and SMTP, cryptocurrency clients, protocol detection, analytics IDs, PGP identities and an Apache mod_status leak.Before presenting the data onto their own axes and nodes, the data needed to be organized into suitable data structures, security scores calculated and aggregated in the cases of Clearnet sites and IP addresses.

The IP addresses, SSH keys, PGP fingerprint keys, related Clearnet sites that are inferred fromthis data are represented as nodes on the graph. I represented SSH keys as their own entities on the hive plot as I was interested in visualizing whether SSH fingerprints are truly unique. I wanted to investigate how misconfigurations resulting in duplicate SSH keys might damage anonymity on the dark net. Other fields are used to score the anonymity of a hidden service for positional encoding of the hidden service nodes.

## Implementation

I used D3.js to create this visualization along with Python for data collection, cleaning, aggregation and preparation into the correct data structures and JSON format for parsing. For reference, the D3.js work to create the hive plot, visualization encodings and features can be found in the script.jsfile whilst the core data preparation phase can be found in edge_runner.py.

## Visual Encoding

The node types are colour encoded and positionally encoded along their axis to present additional information. I tried to select the rightcolourproperties including hue, lightness and chroma along with the distributions and combination of the colours to achieve effectiveness expressiveness(Bartram, Stone, & Patra, 2017). By mapping colour to meaning, including the black background,I wanted to try harness pre-attentive processing to make insights easier to find. Although I’m using a colour scheme closer to a rainbow palette which has been shown to be more misleading and less effective (Hawkins, 2015), research shows that colour associations are more important in determining the likeability of the colours and sensory impact of the visualization (Palmer & Schloss, 2010).

### Hidden services

Hidden services are colour encoded in a deep red and positioned on their axis according to their weighted security score.

#### Hidden Service Security Score

The security score is calculated based on the found PGP and SSH keys, whether an Apache mod_status leak was present, open directories, bitcoin addresses and server fingerprints. The higher the security score, themore insecure the service is. If the mod_statusmodule is enabled on the scanned server, enabled by default in Apache servers, it can reveal sensitive server and geographic information. It isa well-known fact that it should be disabled (Goodin, 2016) and that is why the security score is penalized the most if it is enabled. Any results returned fromOnionScanthat enable server fingerprinting, such as a server version, increase the security score. Found PGP, SSH keys and found opendirectories that can be scanned to find old image versions or temp files also increase the score.Although bitcoin addressesare anonymous, the security score is increased because they can be traced. All bitcoin addresses are public recordand if a bitcoin address is found on a server, the DEA<sup>3</sup> or similar law enforcement agency can use tools and software such as Chain alysis and Elliptic to follow transactions and patterns to see who is interacting with a wallet and who owns what(Southurst, 2017). Most Bitcoin exchanges are regulated and must comply with local law, allowing law enforcementa gents to issue search warrants to see who cashed out on certain bitcoin wallets (Bohannon, 2016).

### Clearnet TLDs

The Clearnet TLDs are colour encoded in green. I grouped the Clearnet services relating to the hidden services into their top-level domains for dimensionality reduction. They are positionally encoded based on degree or connectedness to represent their reference popularity on the dark net. Through link graph analysis and following hyperlinks, large proportions of seemingly unrelated sited can be connected to each other.

### IP addresses

OnionScan returns the found IP addresses for a .onion site. The IP addresses are colour encoded in purple. This data is plotted on its own axis and the nodes arepositionally encoded by Class A. The presence of these leaked IP addresses picked up by OnionScan can completely deanonymize and onion service.

### SSH Keys and PGP Key Fingerprints

PGP fingerprint keys in colour encoded in yellow and SSH keys in orange. Both the PGP and SSH keys are positionally encoded based on the first 8 bitsof their keyhash. PGP Keys are represented on the same “Keys” axis as the SSH keys. Discovered PGP keys, depending on how they are used, hold high risk in making identification of their owner trivially easy.

### Interactivity

The image can be manipulated in real time by panning and zooming to improve human-computer interaction regarding speed and information exploration (Hemminger, Bauers, & Yang, 2008). On hovering over a node, conclusive information associated with itis displayed on the right of the visualization. A tool tip over the node is implemented to give immediate information on a node.

## Analysis

As this was an exploratory analysis of the information gathered, I wanted to present some of my findings from the visualization which I don’t believe would be possible to derive without visualization of the thousands of JSON files. This visualization shows that even when sites don’t relate with each other by hidden service or related Clearnet sites, they can be connected by the other identity correlations. The darknet is more highly connected than previously thought. The presence of duplicate SSH keys is immediately evident from the visualization.These endpoints are an important privacy indicator as they can be correlated against other Clearnet and hidden services to identify actual server location. Apache mod_status leak has a dramatic effect on the security score of a hidden service. It can even outweigh the connectiveness of that hidden service.

## Works Cited

- Bartram, L., Stone, M., & Patra, A. (2017). Affective Color in Visualization. 2017 CHI Conference.doi:10.1145/3025453.3026041

- Bloch, M., & Corum, J. (2008, May 5). Mapping the Human 'Diseasome'.Retrieved from visual complexity: http://www.visualcomplexity.com/vc/project.cfm?id=612

- Bohannon, J. (2016, March 09). Why criminals can't hide behind Bitcoin.Retrieved from Science: https://www.sciencemag.org/news/2016/03/why-criminals-cant-hide-behind-bitcoin

- Goodin, D. (2016, 1 2). Default settings in Apache may decloak Tor hidden services.Retrieved from Ars Technica: https://arstechnica.com/information-technology/2016/02/default-settings-in-apache-may-decloak-tor-hidden-services/

- Hawkins, E. (2015, March). Scrap rainbow color scales. Nature, 519. doi:https://doi.org/10.1038/519291d

- Hemminger, B. M., Bauers, A., & Yang, J. (2008, June 27). Comparison of Navigation Techniques for Large Digital Images. Journal of Digital Imaging, 21, 13–38. doi:10.1007/s10278-008-9133-0

- Krzywinski, M. (2012, March). Hive Plots.Retrieved from Rational Network Visualization -Farewell to Hairballs: http://www.hiveplot.com/

- Lewis, S. J. (2016, 10 25). Discovering the Dark Web.Retrieved from OnionScan: https://onionscan.org/

- Palmer, S. E., & Schloss, K. B. (2010, 05). An ecological valence theory of human color preference. Proceedings of the National Academy of Sciences of the United States of America. doi:https://doi.org/10.1073/pnas.0906172107

- Southurst, J. (2017, October 8). Feds Tracked BTC Addresses and LocalBitcoins to Bust Dark Market ‘Kingpin’.Retrieved from BitsOniline: https://bitsonline.com/feds-tracked-btc-address-dark-market/

- UMBS ebiquity. (2007, April). Twitter Social Network Analysis.Retrieved from UMBS ebiquity: http://ebiquity.umbc.edu/blogger/2007/04/19/twitter-social-network-analysis/

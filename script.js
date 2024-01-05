const metroGraph= {

    //Line 1(blue line)
    'Dakshineshwar': { 'Baranagar': 2 },
    'Baranagar': { 'Dakshineshwar': 2, 'Noapara': 3,'Kamarhati':1},
    'Noapara': { 'Baranagar': 3, 'Belgachia': 2,'Dum Dum Cantonment':2 },
    'Belgachia': { 'Noapara': 2, 'Dum Dum': 4 },
    'Dum Dum': { 'Belgachia': 4, 'Central': 2 },
    'Central': { 'Dum Dum': 2, 'Shyambazar': 3 },
    'Shyambazar': { 'Central': 3, 'Sovabazar Sutanuti': 2 },
    'Sovabazar Sutanuti': { 'Shyambazar': 2, 'Girish Park': 2 },
    'Girish Park': { 'Sovabazar Sutanuti': 2, 'Mahatma Gandhi Road': 2 },
    'Mahatma Gandhi Road': { 'Girish Park': 2, 'Chandni Chowk': 3 },
    'Chandni Chowk': { 'Mahatma Gandhi Road': 3, 'Esplanade': 2 },
    'Esplanade': { 'Chandni Chowk': 2, 'Park Street': 1,'Sealdah':3,'New Mahakaran':2 },
    'Park Street': { 'Esplanade': 1, 'Maidan': 1 ,'Victoria':2},
    'Maidan': { 'Park Street': 1, 'Rabindra Sadan': 1 },
    'Rabindra Sadan': { 'Maidan': 1, 'Netaji Bhavan': 2 },
    'Netaji Bhavan': { 'Rabindra Sadan': 2, 'Jatin Das Park': 2 },
    'Jatin Das Park': { 'Netaji Bhavan': 2, 'Kalighat': 1 },
    'Kalighat': { 'Jatin Das Park': 1, 'Rabindra Sarobar': 2 },
    'Rabindra Sarobar': { 'Kalighat': 2, 'Mahanayak Uttam Kumar': 3 },
    'Mahanayak Uttam Kumar': { 'Rabindra Sarobar': 3, 'Netaji': 2 },
    'Netaji': { 'Mahanayak Uttam Kumar': 2, 'Masterda Surya Sen': 2 },
    'Masterda Surya Sen': { 'Netaji': 2, 'Gitanjali': 1 },
    'Gitanjali': { 'Masterda Surya Sen': 1, 'Kavi Nazrul': 1 },
    'Kavi Nazrul': { 'Gitanjali': 1, 'Shahid Khudiram': 2 },
    'Shahid Khudiram': { 'Kavi Nazrul': 2, 'Kavi Subhash': 2 },
    'Kavi Subhash': { 'Shahid Khudiram': 2 },

    //Line 2(green line)
    'Teghoria': { 'Raghunathpur': 2,'Chinar Park':2,},
    'Raghunathpur': { 'Teghoria': 3, 'Baguiati': 2},
    'Baguiati': { 'Teghoria': 4, 'Dum Dum Park': 2,},
    'Dum Dum Park': { 'Baguiati': 4,'Kestopur' :2 },
    'Kestopur': {'Dum Dum Park':2,'Salt Lake Sector V':1},
    'Salt Lake Sector V': { 'Kestopur': 3, 'Karunamoyee':1},
    'Karunamoyee': { 'Salt Lake Sector V': 1, 'Central Park': 3,},
    'Central Park': { 'Karunamoyee': 3, 'City Center': 2, },
    'City Center': { 'Central Park': 2, 'Bengal Chemical': 3,},
    'Bengal Chemical': { 'City Center': 3, 'Salt Lake Stadium': 4,},
    'Salt Lake Stadium': { 'Bengal Chemical': 4, 'Phoolbagan': 2,},
    'Phoolbagan': { 'Salt Lake Stadium': 2, 'Sealdah': 1,},
    'Sealdah': { 'Phoolbagan': 1, 'Esplanade': 1,},
    'New Mahakaran': { 'Esplanade': 2, 'Howrah': 3,},
    'Howrah': { 'New Mahakaran': 3, 'Howrah Maidan': 1,},
    'Howrah Maidan': { 'Howrah': 1,'Satyajit Ray':2},

    //Line 3(purple line)
    'Victoria': { 'Khidirpur': 2 ,'Park Street': 2},
    'Khidirpur': { 'Victoria': 2, 'Mominpur': 3 },
    'Mominpur': { 'Khidirpur': 3, 'Majerhat': 2 },
    'Majerhat': { 'Mominpur': 2, 'Taratala': 1 },
    'Taratala': { 'Majerhat': 1, 'Behala Bazar': 2 },
    'Behala Bazar': { 'Taratala': 2, 'Behala Chowrasta': 1 },
    'Behala Chowrasta': { 'Behala Bazar': 1, 'Sakher Bazar': 2 },
    'Sakher Bazar': { 'Behala Chowrasta': 2, 'Thakurpukur': 3 },
    'Thakurpukur': { 'Sakher Bazar': 3, 'Joka': 4 },
    'Joka': { 'Thakurpukur': 4, 'IIM Calcutta': 3 },
    'IIM Calcutta': { 'Joka': 3, 'Diamond Park': 2 },
    'Diamond Park': { 'IIM Calcutta': 2 },

    //Line 4(yellow line)
    'Dum Dum Cantonment': { 'Jessore Road': 2,'Noapara':2},
    'Jessore Road': { 'Dum Dum Cantonment': 2, 'Biman Bandar': 3 },
    'Biman Bandar': { 'Jessore Road': 3, 'Birati': 1,'Teghoria':2 },
    'Birati': { 'Biman Bandar': 1, 'Michael Nagar': 2 },
    'Michael Nagar': { 'Birati': 2, 'New Barrackpore': 3 },
    'New Barrackpore': { 'Michael Nagar': 3, 'Madhyamgram': 2 },
    'Madhyamgram': { 'New Barrackpore': 2, 'Hridaypur': 1 },
    'Hridaypur': { 'Madhyamgram': 1, 'Barasat': 2 },
    'Barasat': { 'Hridaypur': 2 },

    //Line 5(pink line)
    'Kamarhati': { 'Baranagar': 1, 'Agarpara': 2 },
    'Agarpara': { 'Kamarhati': 2, 'Panihati': 3 },
    'Panihati': { 'Agarpara': 3, 'Sodepur': 1 },
    'Sodepur': { 'Panihati': 1, 'Subhash Nagar': 2 },
    'Subhash Nagar': { 'Sodepur': 2, 'Khardaha': 1 },
    'Khardaha': { 'Subhash Nagar': 1, 'Tata Gate': 3 },
    'Tata Gate': { 'Khardaha': 3, 'Titagarh': 2 },
    'Titagarh': { 'Tata Gate': 2, 'Talpukur': 1 },
    'Talpukur': { 'Titagarh': 1, 'Barrackpore': 2 },
    'Barrackpore': { 'Talpukur': 2 },

    //Line 6(orange line)
    'Chinar Park': { 'Teghoria': 2, 'City Centre - 2': 3 },
    'City Centre - 2': { 'Chinar Park': 3, 'Mangaldeep': 2 },
    'Mangaldeep': { 'City Centre - 2': 2, 'Eco Park': 1 },
    'Eco Park': { 'Mangaldeep': 1, 'Mother\'s Wax Museum': 2 },
    'Mother\'s Wax Museum': { 'Eco Park': 2, 'Shiksha Tirtha': 3 },
    'Shiksha Tirtha': { 'Mother\'s Wax Museum': 3, 'Biswa Bangla Convention Centre': 2 },
    'Biswa Bangla Convention Centre': { 'Shiksha Tirtha': 2, 'Swapno Bhor': 1 },
    'Swapno Bhor': { 'Biswa Bangla Convention Centre': 1, 'Nazrul Tirtha': 2 },
    'Nazrul Tirtha': { 'Swapno Bhor': 2, 'Nabadiganta': 3 },
    'Nabadiganta': { 'Nazrul Tirtha': 3, 'Salt Lake Sector V': 1 },
    'Salt Lake Sector V': { 'Nabadiganta': 1, 'Nalban': 2 },
    'Nalban': { 'Salt Lake Sector V': 2, 'Gour Kishore Ghosh': 3 },
    'Gour Kishore Ghosh': { 'Nalban': 3, 'Beleghata': 2 },
    'Beleghata': { 'Gour Kishore Ghosh': 2, 'Barun Sengupta': 1 },
    'Barun Sengupta': { 'Beleghata': 1, 'Ritwik Ghatak': 2 },
    'Ritwik Ghatak': { 'Barun Sengupta': 2, 'VIP Bazar': 3 },
    'VIP Bazar': { 'Ritwik Ghatak': 3, 'Hemanta Mukhopadhyay': 1 },
    'Hemanta Mukhopadhyay': { 'VIP Bazar': 1, 'Kavi Sukanta': 2 },
    'Kavi Sukanta': { 'Hemanta Mukhopadhyay': 2, 'Jyotirindra Nandi': 3 },
    'Jyotirindra Nandi': { 'Kavi Sukanta': 3, 'Satyajit Ray': 1 },
    'Satyajit Ray': { 'Jyotirindra Nandi': 1, 'Kavi Subhash': 2 },
};


function findShortestPath() {
    const startStation = document.getElementById('start-station').value;
    const endStation = document.getElementById('end-station').value;
    const distance = dijkstra(metroGraph, startStation, endStation);

    if (distance !== Infinity) {
      console.log(`The shortest distance between ${startStation} and ${endStation} is ${distance} units.`);
      resultElement.innerHTML = `Shortest Path: ${distance.join(' -> ')}`;
    } else {
      console.log(`There is no path between ${startStation} and ${endStation}.`);
    }
}
function dijkstra(graph, start, end) {
    const visited = new Set();
    const distances = {};
    const priorityQueue = [];
  
    for (const node in graph) {
      distances[node] = node === start ? 0 : Infinity;
    }
  
    priorityQueue.push([0, start]);
  
    while (priorityQueue.length > 0) {
      priorityQueue.sort((a, b) => a[0] - b[0]);
      const [currentDistance, currentNode] = priorityQueue.shift();
  
      if (currentNode === end) {
        return distances[end];
      }
  
      if (visited.has(currentNode)) {
        continue;
      }
  
      visited.add(currentNode);
  
      for (const neighbor in graph[currentNode]) {
        const weight = graph[currentNode][neighbor];
        const newDistance = distances[currentNode] + weight;
  
        if (newDistance < distances[neighbor]) {
          distances[neighbor] = newDistance;
          priorityQueue.push([newDistance, neighbor]);
        }
      }
    }
  
    return Infinity; 
  }










































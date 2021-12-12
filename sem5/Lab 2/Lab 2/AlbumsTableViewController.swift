//
//  MusicTableViewController.swift
//  Lab 2
//
//  Created by Viсtor Kozodaev on 12/9/21.
//

import UIKit
import SDWebImage

class AlbumsTableViewController: UITableViewController {
    var albums = [Album]()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        createAlbumArray()
        
        // Uncomment the following line to preserve selection between presentations
        // self.clearsSelectionOnViewWillAppear = false

        // Uncomment the following line to display an Edit button in the navigation bar for this view controller.
        // self.navigationItem.rightBarButtonItem = self.editButtonItem
    }
    
    
    
    // MARK: - Table view data source

    override func numberOfSections(in tableView: UITableView) -> Int {
        // #warning Incomplete implementation, return the number of sections
        return 1
    }

    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        // #warning Incomplete implementation, return the number of rows
        return albums.count
    }

    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath)
        let currentItem = albums[indexPath.row]
        
        cell.textLabel?.text = currentItem.name
        cell.detailTextLabel?.text = currentItem.artistName
    
        let cellImg = UIImageView(frame: CGRect(x: 24, y: 5, width: 45, height: 45))
        cellImg.sd_setImage(with: URL(string: currentItem.coverUrl))
        cell.addSubview(cellImg)
    
        return cell
    }
    
    func createAlbumArray () {
        albums.append(
            Album(id: 0, name: "Album name", artistName: "Artist Name", coverUrl: "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/68/ca/d4/68cad45e-e7b7-e8f9-067e-cef6d8fb2f04/source/100x100bb.jpg", trackCount: 10, genreName: "Rock" ))
        albums.append(
            Album(id: 1, name: "Album name", artistName: "Artist Name", coverUrl: "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/68/ca/d4/68cad45e-e7b7-e8f9-067e-cef6d8fb2f04/source/100x100bb.jpg", trackCount: 10, genreName: "Rock" ))
    }

    /*
    // Override to support conditional editing of the table view.
    override func tableView(_ tableView: UITableView, canEditRowAt indexPath: IndexPath) -> Bool {
        // Return false if you do not want the specified item to be editable.
        return true
    }
    */

    /*
    // Override to support editing the table view.
    override func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCell.EditingStyle, forRowAt indexPath: IndexPath) {
        if editingStyle == .delete {
            // Delete the row from the data source
            tableView.deleteRows(at: [indexPath], with: .fade)
        } else if editingStyle == .insert {
            // Create a new instance of the appropriate class, insert it into the array, and add a new row to the table view
        }    
    }
    */

    /*
    // Override to support rearranging the table view.
    override func tableView(_ tableView: UITableView, moveRowAt fromIndexPath: IndexPath, to: IndexPath) {

    }
    */

    /*
    // Override to support conditional rearranging of the table view.
    override func tableView(_ tableView: UITableView, canMoveRowAt indexPath: IndexPath) -> Bool {
        // Return false if you do not want the item to be re-orderable.
        return true
    }
    */

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}

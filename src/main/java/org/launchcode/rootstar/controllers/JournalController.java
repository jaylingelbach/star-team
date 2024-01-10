package org.launchcode.rootstar.controllers;

import org.launchcode.rootstar.models.Journal;
import org.launchcode.rootstar.models.Seed;
import org.launchcode.rootstar.service.JournalService;
import org.launchcode.rootstar.service.SeedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/journal")
@CrossOrigin
public class JournalController {

    @Autowired
    public JournalService journalService;

    // GET MAPPING
    @GetMapping("/{id}")
    // Returns 200 OK HTTP Response (headers, status, and body) for seed if found, 404 if not
    public ResponseEntity<Journal> getJournalById(@PathVariable int id) {
        Optional<Journal> journal = journalService.getJournalById(id);
        return journal.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("view-journal")
    // Returns all seeds in repository
    public List<Journal> viewJournal() {
        return journalService.getAllJournal();
    }

    // POST MAPPING
    @PostMapping("/add")
    // Returns a response entity with Uniform Resource Identifier with new seed ID and Body
    public ResponseEntity<Journal> addJournal(@RequestBody Journal journal) throws URISyntaxException {
        Journal savedJournal= journalService.addJournal(journal);
        return ResponseEntity.created(new URI("/journal/" + savedJournal.getId())).body(savedJournal);
    }

}

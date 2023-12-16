package org.launchcode.rootstar.service;

import org.launchcode.rootstar.models.Garden;
import org.launchcode.rootstar.models.data.GardenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GardenService {
    private final GardenRepository gardenRepository;

    @Autowired
    public GardenService(GardenRepository gardenRepository) {
        this.gardenRepository = gardenRepository;
    }

    // CRUD operations for Garden class

    // CREATE
    public Garden addGarden(Garden garden) {
        return gardenRepository.save(garden);
    }

    // READ
    public Optional<Garden> getGardenById(int id) {
        return gardenRepository.findById(id);
    }

    public List<Garden> getAllGardens() {
        return gardenRepository.findAll();
    }

    // TODO: make UPDATE functionality

    // DELETE
    public void deleteGarden(int id) {
        gardenRepository.deleteById(id);
    }

}
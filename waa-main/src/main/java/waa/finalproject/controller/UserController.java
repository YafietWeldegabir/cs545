package waa.finalproject.controller;

import waa.finalproject.domain.User;
import waa.finalproject.dto.UserAvailabilityRequestDto;
import waa.finalproject.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:3000")
@RestController
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/users")
    public Iterable<User> loadAllUsers(){
        return userService.getAllUsers();
    }

    @PostMapping("/users")
    public User addUser(@RequestBody User user){
        return  userService.addUser(user);
    }

    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable long id){
          userService.deleteUser(id);
    }

    @GetMapping("/users/isUsernameAvailable")
    public User isUsernameAvailable(@RequestBody UserAvailabilityRequestDto userAvailabilityRequestDto){
        return userService.isUsernameAvailable(userAvailabilityRequestDto);
    }


}

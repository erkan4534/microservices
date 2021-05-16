package com.sha.microservicecoursemanagement.intercomm;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@FeignClient(name ="USER-SERVICE")
public interface UserClient {

    @RequestMapping(method = RequestMethod.POST, value = "/service/name",
            consumes = "application/json")
    List<String> getUserNames(@RequestBody List<Long> userIdList);
}

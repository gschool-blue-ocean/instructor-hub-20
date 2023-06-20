FROM redis:latest

# Optionally, if you need to copy additional configuration files or scripts, you can add the following lines:
COPY redis.conf /usr/local/etc/redis/redis.conf
# COPY script.sh /usr/local/bin/script.sh
# RUN chmod +x /usr/local/bin/script.sh

# Expose the Redis port (optional if you have already exposed the port in the docker-compose.yml)
EXPOSE 6379

# Optionally, if you need to customize the Redis configuration, you can overwrite the default Redis configuration file
# by copying your own `redis.conf` file.
# COPY redis.conf /usr/local/etc/redis/redis.conf

# Optionally, if you have any additional commands or scripts to run during container startup, you can add them here.
CMD [ "redis-server", "/usr/local/etc/redis/redis.conf" ]